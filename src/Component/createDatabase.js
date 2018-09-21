import * as firebase from 'firebase'
import 'firebase/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyDGR5Cbu53VTgwgd21mXdUhqLzRfQRTm8A",
  authDomain: "todoapp-ac4a5.firebaseapp.com",
  databaseURL: "https://todoapp-ac4a5.firebaseio.com",
  projectId: "todoapp-ac4a5",
  storageBucket: "todoapp-ac4a5.appspot.com",
  messagingSenderId: "124734526920"
})

const db = firebase.firestore()
export default db
