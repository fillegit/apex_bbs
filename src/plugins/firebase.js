import Vue from "vue";
import firebase from "firebase/app";
import "firebase/firestore";
import { firestorePlugin } from "vuefire";

Vue.use(firestorePlugin);

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA5lN5PzGe0LAINT0NaWGlwfbqNjYdnUqU",
  authDomain: "apex-bbs.firebaseapp.com",
  projectId: "apex-bbs",
  storageBucket: "apex-bbs.appspot.com",
  messagingSenderId: "997739343085",
  appId: "1:997739343085:web:1fc92047541e19f0e4b0e4",
  measurementId: "G-1T86EWYF8Z",
});

export const db = firebaseApp.firestore();
