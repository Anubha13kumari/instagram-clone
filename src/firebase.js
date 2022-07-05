// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCy_qXwe7tlrtxQg-DdAaYzsxPoPN_PDUQ",
  authDomain: "instagram-clone-react-aa2aa.firebaseapp.com",
  projectId: "instagram-clone-react-aa2aa",
  storageBucket: "instagram-clone-react-aa2aa.appspot.com",
  messagingSenderId: "7827069926",
  appId: "1:7827069926:web:829458f8db5640decbd427",
  measurementId: "G-HPPKDB7YR6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db=app.firestore();
const auth=app.auth();
const storage =app.storage();


  export {db,auth,storage};