import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAlOQhuCE4luldHzXy3egiEGaFKEChJ8vg",
  authDomain: "mymoney-site-db.firebaseapp.com",
  projectId: "mymoney-site-db",
  storageBucket: "mymoney-site-db.appspot.com",
  messagingSenderId: "331520882418",
  appId: "1:331520882418:web:f77e76dff484cd686e026b"
};

  

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
