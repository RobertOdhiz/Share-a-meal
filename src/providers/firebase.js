import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCCY_5ColaXRD8JL87lgMtLQi6zmnRQPJE",
  authDomain: "share-a-meal-dev.firebaseapp.com",
  projectId: "share-a-meal-dev",
  storageBucket: "share-a-meal-dev.appspot.com",
  messagingSenderId: "1077079889551",
  appId: "1:1077079889551:web:f8735bdb26b12ffa8742fa",
  measurementId: "G-JP07H7PENQ"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, analytics };

