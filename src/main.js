import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyA5lN5PzGe0LAINT0NaWGlwfbqNjYdnUqU",
  authDomain: "apex-bbs.firebaseapp.com",
  projectId: "apex-bbs",
  storageBucket: "apex-bbs.appspot.com",
  messagingSenderId: "997739343085",
  appId: "1:997739343085:web:1fc92047541e19f0e4b0e4",
  measurementId: "G-1T86EWYF8Z",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
