// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFireStore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCkQSgSFXib_KH1SqCRz17nm55pZejSWtY",
  authDomain: "lancers-112c0.firebaseapp.com",
  projectId: "lancers-112c0",
  storageBucket: "lancers-112c0.appspot.com",
  messagingSenderId: "1298819311",
  appId: "1:1298819311:web:cfadd61d80bffd4934531a",
  measurementId: "G-9W464PT189"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFireStore(app);

export { db };
