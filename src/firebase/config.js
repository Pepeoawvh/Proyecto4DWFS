
import firebase  from "firebase/compat/app"
import "firebase/compat/firestore"

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBK2QXYwSbmdeXg5iv5p9e-vwFW9uq3Tyc",
  authDomain: "proyecto4dwfs.firebaseapp.com",
  projectId: "proyecto4dwfs",
  storageBucket: "proyecto4dwfs.appspot.com",
  messagingSenderId: "1066948403085",
  appId: "1:1066948403085:web:135d095830c48d9b9127c4"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)

export const firestoreDB = app.firestore()