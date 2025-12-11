// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVFVLy_Lh8K8E85QPFMIB40WXxr3bJlLk",
  authDomain: "siddheshumeshsarang.firebaseapp.com",
  projectId: "siddheshumeshsarang",
  storageBucket: "siddheshumeshsarang.firebasestorage.app",
  messagingSenderId: "451833567060",
  appId: "1:451833567060:web:ba8292195ab04f0c489ac1",
  measurementId: "G-TBMMZHNK5N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);