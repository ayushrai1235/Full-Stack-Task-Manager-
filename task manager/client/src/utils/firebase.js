// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_FIREBASE_API_KEY,
  authDomain: "task-manager-35957.firebaseapp.com",
  projectId: "task-manager-35957",
  storageBucket: "task-manager-35957.firebasestorage.app",
  messagingSenderId: "675045700773",
  appId: "1:675045700773:web:0bb94942bf4b8fb739c94c",
  measurementId: "G-41QN1WK5FD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);