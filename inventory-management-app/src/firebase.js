// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyATZTGxsnJ8BKTDC95USkeBGge7NqPBL0U",
  authDomain: "inventory-management-95a72.firebaseapp.com",
  projectId: "inventory-management-95a72",
  storageBucket: "inventory-management-95a72.appspot.com",
  messagingSenderId: "285759487749",
  appId: "1:285759487749:web:f5ca292ec0e6efb38cc16c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };