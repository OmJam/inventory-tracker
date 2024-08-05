// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
require("dotenv").config({ path: "inventory.env" });

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const apiKeyfb = process.env.API_KEY;

const firebaseConfig = {
  apiKey: apiKeyfb,
  authDomain: "inventory-managementfb.firebaseapp.com",
  projectId: "inventory-managementfb",
  storageBucket: "inventory-managementfb.appspot.com",
  messagingSenderId: "1039683615569",
  appId: "1:1039683615569:web:a8aea90066e7aa9673b170",
  measurementId: "G-YQ285930NF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
