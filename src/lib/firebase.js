import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,

  authDomain: "reactchat-b595b.firebaseapp.com",
  projectId: "reactchat-b595b",
  storageBucket: "reactchat-b595b.appspot.com",
  messagingSenderId: "610709030477",
  appId: "1:610709030477:web:891a08f68c5b552dbafe04",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
