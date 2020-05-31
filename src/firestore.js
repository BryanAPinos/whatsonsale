import firebase from "firebase";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCFDb0rSwy6DgTmuLrZWFHP4aBXOy_7k0s",
  authDomain: "whatsonsale-7adab.firebaseapp.com",
  databaseURL: "https://whatsonsale-7adab.firebaseio.com",
  projectId: "whatsonsale-7adab",
  storageBucket: "whatsonsale-7adab.appspot.com",
  messagingSenderId: "68136158480",
  appId: "1:68136158480:web:b9eaee1199a15e1db11195",
  measurementId: "G-2X667QBHTW",
};
firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();

export default firebase;
export const auth = firebase.auth();
