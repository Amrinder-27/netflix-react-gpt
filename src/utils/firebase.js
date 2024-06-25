// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCP67LYinOsaGqLzAtaoq8bq-q7EcZbC5Y",
  authDomain: "netflixgpt-acc0f.firebaseapp.com",
  projectId: "netflixgpt-acc0f",
  storageBucket: "netflixgpt-acc0f.appspot.com",
  messagingSenderId: "16079732373",
  appId: "1:16079732373:web:66ee833c80516bd388259c",
  measurementId: "G-FT2SLV29WQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();