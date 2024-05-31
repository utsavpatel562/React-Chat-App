import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-chatapp-d5410.firebaseapp.com",
  projectId: "react-chatapp-d5410",
  storageBucket: "react-chatapp-d5410.appspot.com",
  messagingSenderId: "243413298033",
  appId: "1:243413298033:web:6e09d5a983bed0fa4aa4d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()