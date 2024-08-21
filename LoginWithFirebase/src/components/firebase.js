// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
// import { getFireStore } from 'firebase/firestore' // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
    authDomain: "user-authentication-1d53f.firebaseapp.com",
    projectId: "user-authentication-1d53f",
    storageBucket: "user-authentication-1d53f.appspot.com",
    messagingSenderId: "12157748400",
    appId: "1:12157748400:web:9e21a6eba725dacbb82775",
    measurementId: "G-3319RYMV7M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;