// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCR2diF_d-U6ev-KjB1owRjuZeuGc5_ng",
  authDomain: "pizza-planet-v3-80473.firebaseapp.com",
  projectId: "pizza-planet-v3-80473",
  storageBucket: "pizza-planet-v3-80473.appspot.com",
  messagingSenderId: "151980516344",
  appId: "1:151980516344:web:e8899828240cdbb8556c0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const dbPizzasRef = collection(db, "pizzas");
export const dbOrdersRef = collection(db, "orders");
