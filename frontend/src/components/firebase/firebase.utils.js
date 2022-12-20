// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgr_3syJN3c7iD9nmTtm3_WeU-yl_vBBI",
  authDomain: "hotel-manager-22552.firebaseapp.com",
  projectId: "hotel-manager-22552",
  storageBucket: "hotel-manager-22552.appspot.com",
  messagingSenderId: "960047229468",
  appId: "1:960047229468:web:8db674c90b2d243d920dd9",
};

// Initialize Firebase,
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
