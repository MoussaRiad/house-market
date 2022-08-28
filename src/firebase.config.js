// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3QUfSUqrA3T5-q0YcnPG6Ac41G9T_sCs",
  authDomain: "marketplace-62157.firebaseapp.com",
  projectId: "marketplace-62157",
  storageBucket: "marketplace-62157.appspot.com",
  messagingSenderId: "784926196675",
  appId: "1:784926196675:web:e179a49422701f1797b376",
  measurementId: "G-LBJ4Z4YMKK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore()