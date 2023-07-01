// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFireStore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: NEXT_APP_APIKEY,
  authDomain: NEXT_APP_AUTHDOMAIN,
  projectId: NEXT_APP_PROJECTID,
  storageBucket: NEXT_APP_STORAGEBUCKET,
  messagingSenderId: NEXT_APP_MESSAGINGSENDERID,
  appId: NEXT_APP_APPID,
  measurementId: NEXT_APP_MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFireStore(app);

export { db };
