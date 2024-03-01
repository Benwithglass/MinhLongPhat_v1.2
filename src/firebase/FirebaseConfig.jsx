// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1xLrNG0hNn7pyLhiMinA5SSkksRfh1hc",
  authDomain: "minhlongphat-a62b7.firebaseapp.com",
  projectId: "minhlongphat-a62b7",
  storageBucket: "minhlongphat-a62b7.appspot.com",
  messagingSenderId: "955945523753",
  appId: "1:955945523753:web:6efab31da2962b6f5bda38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app)
const auth = getAuth(app)

export {fireDB, auth};