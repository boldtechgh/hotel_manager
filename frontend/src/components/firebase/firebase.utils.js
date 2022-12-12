// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp7-NvHlE3slvRinGIuJHhzUqVZxnrz_o",
  authDomain: "hotel-manager-f1828.firebaseapp.com",
  projectId: "hotel-manager-f1828",
  storageBucket: "hotel-manager-f1828.appspot.com",
  messagingSenderId: "330794851813",
  appId: "1:330794851813:web:d20aed0957951353bf230c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
