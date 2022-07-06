import {initializeApp} from 'firebase/app'

// Import the functions you need from the SDKs you need
import {getFirestore} from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB56EYWez1EOtG7DLfqFloMlcVQDUFz7sI",
  authDomain: "baking-1121b.firebaseapp.com",
  databaseURL: "https://baking-1121b-default-rtdb.firebaseio.com",
  projectId: "baking-1121b",
  storageBucket: "baking-1121b.appspot.com",
  messagingSenderId: "978422588268",
  appId: "1:978422588268:web:5973bda5b66f1269a3c949",
  measurementId: "G-73CJT6CS38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
const firestore = getFirestore(app)
export {app, storage, firestore} 