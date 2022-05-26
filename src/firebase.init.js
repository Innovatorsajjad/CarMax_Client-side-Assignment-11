// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU4HwOCesddI2rDAvI6xuA2lFb1mFv-v4",
  authDomain: "car-max-2efa4.firebaseapp.com",
  projectId: "car-max-2efa4",
  storageBucket: "car-max-2efa4.appspot.com",
  messagingSenderId: "965463185747",
  appId: "1:965463185747:web:85aebfd7b25427e06c29a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;