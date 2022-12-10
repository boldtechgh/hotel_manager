// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_MdkkbnxZ3sES11cnvQlg1FuCzsykJ8E",
  authDomain: "auth-c4722.firebaseapp.com",
  projectId: "auth-c4722",
  storageBucket: "auth-c4722.appspot.com",
  messagingSenderId: "1015586814039",
  appId: "1:1015586814039:web:c7f43e4a53203e53124b12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)