// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDf8X68Z2NYKqIdLH5ROnQow20iWJZcQMc",
  authDomain: "scriptive-f207c.firebaseapp.com",
  projectId: "scriptive-f207c",
  storageBucket: "scriptive-f207c.appspot.com",
  messagingSenderId: "865460099707",
  appId: "1:865460099707:web:ecb488b48d7dfa850b60de",
  measurementId: "G-6CZ3E77VC8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
