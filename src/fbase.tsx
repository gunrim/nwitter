import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, User, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";


const firebaseConfig:any = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID    
  };

console.log(firebaseConfig);

const fbase:FirebaseApp = initializeApp(firebaseConfig);

const auth:Auth = getAuth();

//const user:User|null = auth.currentUser;
//if (user){
//  console.log("로그인 되었습니다.");
//}else{
//  console.log("로그인 되지 않았습니다.");
//}


const createEmailUser = (email:string, password:string) => {

  let returnUsr:User|null;
   
  createUserWithEmailAndPassword (auth, email, password)
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

const loginEmailuser = (email:string, password:string) => {

  signInWithEmailAndPassword(getAuth(), email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

const logout = () => {

  signOut(getAuth()).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });

}

const currUser:User|null = auth.currentUser;





 


export {fbase, createEmailUser, loginEmailuser, logout, currUser}
