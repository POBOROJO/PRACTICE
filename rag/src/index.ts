import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { TaskType } from "@google/generative-ai";
import { FaissStore } from "@langchain/community/vectorstores/faiss";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import dotenv from "dotenv";
dotenv.config();

const budget_speech = "src/documents/budget_speech.pdf";

const loader = new PDFLoader(budget_speech);

const Document = async () => {
  const docs = await loader.load();

  // splitter functions
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200,
  });

  // created chunks from pdf
  const spilltedDoc = await splitter.splitDocuments(docs);

  const embeddings = new GoogleGenerativeAIEmbeddings({
    apiKey: process.env.GOOGLE_API_KEY,
    model: "text-embedding-004", // 768 dimensions
    taskType: TaskType.RETRIEVAL_DOCUMENT,
    title: "Document title",
  });

  const vectorStore = await FaissStore.fromDocuments(spilltedDoc, embeddings);

  // const retriever = vectorStore.asRetriever({});

  const query = "What are the main increase in price in the budget?";
  // const retrievedDocs = await retriever.invoke(query);
  const searchResults = await vectorStore.similaritySearch(query,10);
  console.log("No of search results:", searchResults.length);
  console.log("Search Results:", searchResults);

  // console.log("Retrieved Documents:", retrievedDocs);
  // console.log(spilltedDoc);
};

Document();
