/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCC7HS1WbYy0Tm8fxJsX5SfQPKiSGJG0Oo",
  authDomain: "netflixgpt-7fd73.firebaseapp.com",
  projectId: "netflixgpt-7fd73",
  storageBucket: "netflixgpt-7fd73.appspot.com",
  messagingSenderId: "30541158854",
  appId: "1:30541158854:web:37512ae653efa2ad453ac7",
  measurementId: "G-EP11DTW1HY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication
export const auth = getAuth();
