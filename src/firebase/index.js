// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';

import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
// import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyASlAYL2Y87kw8Blk_wDPEbi5YoKdNCQIo",
  authDomain: "note-keeper-37198.firebaseapp.com",
  projectId: "note-keeper-37198",
  storageBucket: "note-keeper-37198.appspot.com",
  messagingSenderId: "648208654382",
  appId: "1:648208654382:web:d2b012fd27fc6ca7d1bfbf",
  measurementId: "G-RYV7S2444G"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;