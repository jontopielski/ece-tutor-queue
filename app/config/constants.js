import firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAr1oedx1qHYaNoBU_SBomjlHAI_5xQeRI",
  authDomain: "ece-tutors.firebaseapp.com",
  databaseURL: "https://ece-tutors.firebaseio.com",
  projectId: "ece-tutors",
  storageBucket: "ece-tutors.appspot.com",
  messagingSenderId: "428532591759"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
