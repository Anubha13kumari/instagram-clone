import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCy_qXwe7tlrtxQg-DdAaYzsxPoPN_PDUQ",
  authDomain: "instagram-clone-react-aa2aa.firebaseapp.com",
  projectId: "instagram-clone-react-aa2aa",
  storageBucket: "instagram-clone-react-aa2aa.appspot.com",
  messagingSenderId: "7827069926",
  appId: "1:7827069926:web:829458f8db5640decbd427",
  measurementId: "G-HPPKDB7YR6"
});



const db=firebaseApp.firestore();
const auth=firebase.auth();
const storage =firebase.storage();

export {db,auth,storage};