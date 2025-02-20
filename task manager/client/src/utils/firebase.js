// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_FIREBASE_API_KEY,
  authDomain: "fullstacktaskmanager.firebaseapp.com",
  projectId: "fullstacktaskmanager",
  storageBucket: "fullstacktaskmanager.firebasestorage.app",
  messagingSenderId: "137012672008",
  appId: "1:137012672008:web:ee2e026c82a92762fc03bd",
  measurementId: "G-0E9KR7HJ1S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);