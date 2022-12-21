// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvG_YcDlszfguIG9bKfENaUfEkywSdxqo",
  authDomain: "redux-journal-1e9dd.firebaseapp.com",
  projectId: "redux-journal-1e9dd",
  storageBucket: "redux-journal-1e9dd.appspot.com",
  messagingSenderId: "160928721127",
  appId: "1:160928721127:web:f8426c8c375977f5c41a42",
  measurementId: "G-D1JHW8KW2V"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );