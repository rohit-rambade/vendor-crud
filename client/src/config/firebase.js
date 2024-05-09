import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAWzbMahH5Ph2QwsYt7tANYnRJuHMgJ3aI",
  authDomain: "vendor-management-7d62c.firebaseapp.com",
  projectId: "vendor-management-7d62c",
  storageBucket: "vendor-management-7d62c.appspot.com",
  messagingSenderId: "4394651809",
  appId: "1:4394651809:web:e141aa4f038c05054520e0",
  measurementId: "G-M0291HQ0HH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
