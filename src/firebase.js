import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "jewelry-store-a2f4e.firebaseapp.com",
  projectId: "jewelry-store-a2f4e",
  storageBucket: "jewelry-store-a2f4e.appspot.com",
  messagingSenderId: "785191656326",
  appId: "1:785191656326:web:416f2c89f8586792e1ea07",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
