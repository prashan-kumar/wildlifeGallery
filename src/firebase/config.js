import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBY-uT8q3ZFUPjhaXpkyI2Mipdqx42kKwk",
  authDomain: "wildlife-gallery-45823.firebaseapp.com",
  projectId: "wildlife-gallery-45823",
  storageBucket: "wildlife-gallery-45823.appspot.com",
  messagingSenderId: "1056092769727",
  appId: "1:1056092769727:web:fd41898ff3f025986ca50a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };