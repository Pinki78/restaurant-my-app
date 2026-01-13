import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCECVlz8qU86eAMLkl_DYQi3TqaU9g8-M4",
  authDomain: "restaurants-my-app.firebaseapp.com",
  projectId: "restaurants-my-app",
  storageBucket: "restaurants-my-app.firebasestorage.app",
  messagingSenderId: "805523643306",
  appId: "1:805523643306:web:32056d702d74b6d4b1e9d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);

// Providers
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
