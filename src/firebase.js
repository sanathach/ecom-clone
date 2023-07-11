import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDDmUkucwNqw9KkhuOkgetpTjsYX-fjOXg",
  authDomain: "challenge-762a1.firebaseapp.com",
  projectId: "challenge-762a1",
  storageBucket: "challenge-762a1.appspot.com",
  messagingSenderId: "130950410988",
  appId: "1:130950410988:web:5c2a030cee77f71efe2bc9",
  measurementId: "G-5LZGEGPE5Y"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
