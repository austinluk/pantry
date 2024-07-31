// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGzX3XmLQFg9U1H0lWzCRZJAcu8kJkTMQ",
  authDomain: "inventory-management-47b0d.firebaseapp.com",
  projectId: "inventory-management-47b0d",
  storageBucket: "inventory-management-47b0d.appspot.com",
  messagingSenderId: "958824593034",
  appId: "1:958824593034:web:06365c05ef25ab60971f73",
  measurementId: "G-9KMLKPW3Z3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}