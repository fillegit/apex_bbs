import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";

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
