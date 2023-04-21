import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, DocumentData, doc } from "firebase/firestore";



 

const firebaseConfig:any = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID    
  };
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const fireStore = () => {

  const insertDoc = async (_colName:string, _data:any) => {

    try {
      const docRef = await addDoc(collection(db, _colName), _data);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const readDocs:any = async (_colName:string) => {

    const querySnapshot:DocumentData = await getDocs(collection(db, _colName));
    // querySnapshot.forEach((doc) => {
    //   console.log(`${doc.id} => ${doc.data()}`);
    // });

    return querySnapshot;
  };

  const readDoc:any = async (_colName:string, _doc:string) => {

    const alovelaceDocumentRef:DocumentData = doc(db, _colName, _doc);
    return alovelaceDocumentRef;
  };

  const readCollection:any = (_colName:string) => {
    const usersCollectionRef:DocumentData = collection(db, _colName);
    return usersCollectionRef;

  }
  
 
};

export default fireStore;

