import app from "firebase/app"
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDtNdlKpeu8jo0W-5ujG751Esm4BdKQX2E",
    authDomain: "proyecto1-c57cb.firebaseapp.com",
    projectId: "proyecto1-c57cb",
    storageBucket: "proyecto1-c57cb.firebasestorage.app",
    messagingSenderId: "492847481139",
    appId: "1:492847481139:web:94a610b53db91c7b78fe46"
  };
  app.initializeApp(firebaseConfig)
  export const auth = firebase.auth()
  export const db = app.firestore()
  export const storage =app.storage(

  )
