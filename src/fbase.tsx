import { FirebaseApp, initializeApp } from "firebase/app";
import "firebase/firestore";
import { Auth,  getAuth,  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig:any = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID    
  };

console.log(firebaseConfig);

const firebase:FirebaseApp = initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService:Auth = getAuth();
export const dbService = getFirestore();
export const storageService = getStorage(firebase);
 