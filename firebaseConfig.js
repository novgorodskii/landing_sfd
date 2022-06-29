// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE6Gjgo1V0xJvWVUNuDqFFKmP4d1I1mtM",
  authDomain: "cfdapp-9b01b.firebaseapp.com",
  projectId: "cfdapp-9b01b",
  storageBucket: "cfdapp-9b01b.appspot.com",
  messagingSenderId: "280446860138",
  appId: "1:280446860138:web:4160ee65b77842f7ff8313"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);