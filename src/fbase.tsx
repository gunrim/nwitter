import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, User, getAuth } from "firebase/auth";


const firebaseConfig:any = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID    
  };

const fbase:FirebaseApp = initializeApp(firebaseConfig);
///export default fbase;

const auth:Auth = getAuth();

//const user:User|null = auth.currentUser;
//if (user){
//  console.log("로그인 되었습니다.");
//}else{
//  console.log("로그인 되지 않았습니다.");
//}

export {fbase, auth}
