// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "file-sharing-app-1575b.firebaseapp.com",
  projectId: "file-sharing-app-1575b",
  storageBucket: "file-sharing-app-1575b.appspot.com",
  messagingSenderId: "303394761745",
  appId: "1:303394761745:web:3e954648d6b6f23b6495b0",
  measurementId: "G-Y9TZVDGSRP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);