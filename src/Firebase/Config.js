import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebase = {
  apiKey: "AIzaSyCU0JRJ3zu20KWjJKVMAZ0971bK5JQ6TDM",
  authDomain: "examination-5.firebaseapp.com",
  projectId: "examination-5",
  storageBucket: "examination-5.appspot.com",
  messagingSenderId: "175082384004",
  appId: "1:175082384004:web:e3f448be584afcf9d6f0d1",
  measurementId: "G-B60QL3Z110",
};


const app = initializeApp(firebase);
const auth = getAuth(app);



export { auth };