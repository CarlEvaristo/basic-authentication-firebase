// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth" //ADD AUTHENTICATION TO PROJECT

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVgE9IgwWlM6QDTBOwaD_ix7Ipyv9VqTQ",
  authDomain: "basic-authentication-a6f8c.firebaseapp.com",
  projectId: "basic-authentication-a6f8c",
  storageBucket: "basic-authentication-a6f8c.appspot.com",
  messagingSenderId: "1092361374543",
  appId: "1:1092361374543:web:42635b80985c09ff12533a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth }