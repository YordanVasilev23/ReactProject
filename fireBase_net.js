// Import the functions you need from the SDKs you need
import firebase from "firebase"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjNZcCsVl3Vp0PKXvcXtY3upJ6_2MPH0w",
  authDomain: "examproject-a8bde.firebaseapp.com",
  projectId: "examproject-a8bde",
  storageBucket: "examproject-a8bde.appspot.com",
  messagingSenderId: "216269029946",
  appId: "1:216269029946:web:7b8895e6ac11638a2deb03",
  measurementId: "G-Z1WYR5S914"
};
let db = firebase.firestore();
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default db