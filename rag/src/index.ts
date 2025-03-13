import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import {
  ChatGoogleGenerativeAI,
  GoogleGenerativeAIEmbeddings,
} from "@langchain/google-genai";
import { TaskType } from "@google/generative-ai";
import { FaissStore } from "@langchain/community/vectorstores/faiss";
import { PromptTemplate } from "@langchain/core/prompts";
import dotenv from "dotenv";
import {
  RunnableSequence,
  RunnablePassthrough,
} from "@langchain/core/runnables";
import { StringOutputParser } from "@langchain/core/output_parsers";

dotenv.config();

const budget_speech = "src/documents/budget_speech.pdf";

const loader = new PDFLoader(budget_speech);

const Document = async () => {
  const docs = await loader.load();

  // Split document into chunks
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200,
  });

  const splitDocs = await splitter.splitDocuments(docs);

  // Create embeddings for document chunks
  const embeddings = new GoogleGenerativeAIEmbeddings({
    apiKey: process.env.GOOGLE_API_KEY,
    model: "text-embedding-004",
    taskType: TaskType.RETRIEVAL_DOCUMENT,
  });

  // Store embeddings in FAISS vector DB
  const vectorStore = await FaissStore.fromDocuments(splitDocs, embeddings);
  await vectorStore.save("./budget-vector-store");
  console.log("Vector store created and saved");

  // Load saved vector store
  const loadedVectorStore = await FaissStore.load(
    "./budget-vector-store",
    embeddings
  );
  const retriever = loadedVectorStore.asRetriever(100);

  // Define the standalone question generation prompt
  const standaloneQuestionTemplate = `Given a user query, generate a standalone question:
  User Query: {prompt}
  Standalone Question: `;

  const standaloneQuestionPrompt = PromptTemplate.fromTemplate(
    standaloneQuestionTemplate
  );

  // Define the context-aware response prompt
  const promptWithContextTemplate = `
  Answer the question by extracting relevant information from the CONTEXT below. Do not include the word "context" in your response. If the question is unrelated, respond with "Question is irrelevant."

  CONTEXT: {context}
  QUESTION: {prompt}
  ANSWER: `;

  const promptWithContextPrompt = PromptTemplate.fromTemplate(
    promptWithContextTemplate
  );

  // Initialize the LLM
  const llm = new ChatGoogleGenerativeAI({
    apiKey: process.env.GOOGLE_API_KEY,
    model: "gemini-1.5-flash",
  });

  // Define chains
  const standaloneQuestionChain = RunnableSequence.from([
    standaloneQuestionPrompt,
    llm,
    new StringOutputParser(),
  ]);

  interface PreviousResult {
    standaloneQuestion: string;
    originalInput: {
      prompt: string;
    };
  }

  interface RetrievedDoc {
    pageContent: string;
    metadata: Record<string, any>;
  }

  const retrievalChain = RunnableSequence.from<PreviousResult, string>([
    (prevResult: PreviousResult) => prevResult.standaloneQuestion,
    retriever,
    (docs: RetrievedDoc[]) => docs.map((doc) => doc.pageContent).join("\n\n"),
  ]);

  const answerChain = RunnableSequence.from([
    promptWithContextPrompt,
    llm,
    new StringOutputParser(),
  ]);

  // Main processing chain
  const chain = RunnableSequence.from([
    {
      standaloneQuestion: standaloneQuestionChain,
      originalInput: new RunnablePassthrough(),
    },
    (prevResult) => {
      console.log("Standalone Question:", prevResult.standaloneQuestion);
      return prevResult;
    },
    {
      context: retrievalChain,
      prompt: ({ originalInput }) => originalInput.prompt,
    },
    (prevResult) => {
      console.log("Retrieved Context:", prevResult.context);
      return prevResult;
    },
    answerChain,
  ]);

  // Query the system
  const query = "What are the main price increases in the budget?";
  console.log(`Question: ${query}`);

  const response = await chain.invoke({ prompt: query });

  console.log("Response:", response);
};

Document();
