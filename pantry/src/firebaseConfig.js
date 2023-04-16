import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBy9S5BFrLGmKjCi1PJ9PACTeBGwFr3r2Y",
    authDomain: "pantry-fc587.firebaseapp.com",
    projectId: "pantry-fc587",
    storageBucket: "pantry-fc587.appspot.com",
    messagingSenderId: "966979414121",
    appId: "1:966979414121:web:3e461a8f9af700fa865af8",
    measurementId: "G-1Q5QZMMW5H"
};

if (!firebase.apps.length) {
  const defaultApp = firebase.initializeApp(firebaseConfig);
}

export { firebase };