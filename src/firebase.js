// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmwjVy1_0w84qEtvZEjP3vsH_PeQ8Ryfk",
  authDomain: "react-fb-auth-4be29.firebaseapp.com",
  projectId: "react-fb-auth-4be29",
  storageBucket: "react-fb-auth-4be29.appspot.com",
  messagingSenderId: "612257771905",
  appId: "1:612257771905:web:160d228560a7b77947b880"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)