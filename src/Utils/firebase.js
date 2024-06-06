// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtnPSBTa9pDMOJpRO0dihPX1PNRD4k5Zk",
  authDomain: "netflix-gpt-6ec57.firebaseapp.com",
  projectId: "netflix-gpt-6ec57",
  storageBucket: "netflix-gpt-6ec57.appspot.com",
  messagingSenderId: "497055188875",
  appId: "1:497055188875:web:e78f19024ccba2cd4e918e",
  measurementId: "G-W2LRM00GKT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();