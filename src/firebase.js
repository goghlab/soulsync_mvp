import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyCQB3lSSjmtb6dSO0VLBIaWYP-Sv2_WwZY",
  authDomain: "soulsync-b68b1.firebaseapp.com",
  projectId: "soulsync-b68b1",
  storageBucket: "soulsync-b68b1.appspot.com",
  messagingSenderId: "596483512380",
  appId: "1:596483512380:web:78e7534f86c0823a150b39",
  measurementId: "G-94VLF35HNJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app); // Initialize Firestore

export { app, auth, firestore };
