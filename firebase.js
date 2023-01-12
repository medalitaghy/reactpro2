// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAwLQWplLEYt4bInagx6PyeJGXJCenytWw",
    authDomain: "reactepro2.firebaseapp.com",
    projectId: "reactepro2",
    storageBucket: "reactepro2.appspot.com",
    messagingSenderId: "1075178087147",
    appId: "1:1075178087147:web:32834286aa19414b48d4ae"
  };

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()
const firestore = firebase.firestore()

export { auth ,firestore,firebase};