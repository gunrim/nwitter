import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, GoogleAuthProvider, User, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


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

const authService:Auth = getAuth();

//const user:User|null = auth.currentUser;
//if (user){
//  console.log("로그인 되었습니다.");
//}else{
//  console.log("로그인 되지 않았습니다.");
//}


const createEmailUser = (email:string, password:string) => {

  let returnUsr:User|null;
   
  createUserWithEmailAndPassword (authService, email, password)
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

  let user = null;

  signInWithEmailAndPassword(getAuth(), email, password)
  .then((userCredential) => {
    // Signed in
    user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

  return user;
}

const socialLogin = (_provider:string) => {

  let provider;
  let user;

  if (_provider === "google"){
    provider = new GoogleAuthProvider();
    // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    // const auth = getAuth();
    // auth.languageCode = 'it';

    // provider.setCustomParameters({
    //   'login_hint': 'user@example.com'
    // });

    const auth = getAuth();
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential!.accessToken;
      // The signed-in user info.
      user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });

  }else{
    
  }


  return user;
            



}

const logout = () => {

  signOut(getAuth()).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });

}

const firebaseInstance = fbase; 


export {firebaseInstance, createEmailUser, loginEmailuser, logout, authService, socialLogin}
