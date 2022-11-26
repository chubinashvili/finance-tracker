import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAUnyas4iedVn78MAgSAwCejOMObkedOAA",
    authDomain: "db-mymoney.firebaseapp.com",
    projectId: "db-mymoney",
    storageBucket: "db-mymoney.appspot.com",
    messagingSenderId: "540412801516",
    appId: "1:540412801516:web:bf7ea494204e130151d0c9"
  };
  

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
