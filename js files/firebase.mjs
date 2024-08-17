// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt5DIsvvBvOrIDlBNu46KMRF7CqvxzN_4",
  authDomain: "my-project-9d1a6.firebaseapp.com",
  projectId: "my-project-9d1a6",
  storageBucket: "my-project-9d1a6.appspot.com",
  messagingSenderId: "949471357522",
  appId: "1:949471357522:web:1422908d693f7c1f984d8b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
