import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, User, createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";

const firebaseConfig:any = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID    
  };

// Initialize Firebase
const firebaseApp:FirebaseApp = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const firebaseDb:Firestore = getFirestore(firebaseApp);



const authService:any = () => {

    const firebaseAuth:Auth = getAuth(firebaseApp);

    const createEmailUser = (email:string, password:string) => {

        let returnUsr:User|null;
         
        createUserWithEmailAndPassword (firebaseAuth, email, password)
        .then((userCredential) => {
          // Signed in
          returnUsr = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
      
          console.log("[" + errorCode + "] : " + errorMessage );
          // ..
        });
      
        return returnUsr!;
      }




}



export {authService}