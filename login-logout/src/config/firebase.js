import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVPj9o8rtRsJUYYh8B-zVCTozu9dx4UTQ",
  authDomain: "fir-auth-45ee5.firebaseapp.com",
  projectId: "fir-auth-45ee5",
  storageBucket: "fir-auth-45ee5.appspot.com",
  messagingSenderId: "50053841307",
  appId: "1:50053841307:web:100eaceac873d5e64ea13e",
  measurementId: "G-J3G9X4Z3B1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
