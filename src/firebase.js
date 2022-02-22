import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB3TkKIRcqRwrMy7pD_Lv9lEtdGWbVqxC0",
  authDomain: "pineone-login.firebaseapp.com",
  projectId: "pineone-login",
  storageBucket: "pineone-login.appspot.com",
  messagingSenderId: "198992048495",
  appId: "1:198992048495:web:81f23c73602812a5bc789a",
  measurementId: "G-TBQ1E4N98D",
};

initializeApp(firebaseConfig);

export const auth = getAuth();
