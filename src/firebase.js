// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "thoughts-3a1f7.firebaseapp.com",
  projectId: "thoughts-3a1f7",
  storageBucket: "thoughts-3a1f7.firebasestorage.app",
  messagingSenderId: "489279309255",
  appId: "1:489279309255:web:2b64c4384c9f4347cc05e2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

signInAnonymously(auth).catch((error) => {
  console.error("Erro ao fazer login anônimo:", error);
});

export { db };
export { auth };
