import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-sGD0ekou-iTM2diF9v1vtiMS1hbgxrU",
  authDomain: "book-list-with-firebase-b06bd.firebaseapp.com",
  projectId: "book-list-with-firebase-b06bd",
  storageBucket: "book-list-with-firebase-b06bd.firebasestorage.app",
  messagingSenderId: "180794505635",
  appId: "1:180794505635:web:eb9df309930ea04c01c216"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);