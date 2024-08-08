// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { } from "firebase/storage";
import { } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAc876d2a44F0MhlLlKgNjWpCs9B3BhV9w",
  authDomain: "percplanner-80ff2.firebaseapp.com",
  projectId: "percplanner-80ff2",
  storageBucket: "percplanner-80ff2.appspot.com",
  messagingSenderId: "613352039389",
  appId: "1:613352039389:web:8967e5236b9f603bba0c34",
  measurementId: "G-PBQ785RPWH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app)

const analytics = getAnalytics(app);