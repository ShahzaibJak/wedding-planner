// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfiZlr3_TtRFpSNxtTtiocCLqLQZNON2g",
  authDomain: "event-management-fitness.firebaseapp.com",
  projectId: "event-management-fitness",
  storageBucket: "event-management-fitness.appspot.com",
  messagingSenderId: "294014987550",
  appId: "1:294014987550:web:65f44b3c03203923a42d0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth