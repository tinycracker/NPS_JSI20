
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD_Zny-BxvsYZXKfYi4BEthOr4qKQKOi9Y",
    authDomain: "npsjsi20.firebaseapp.com",
    projectId: "npsjsi20",
    storageBucket: "npsjsi20.appspot.com",
    messagingSenderId: "381857842208",
    appId: "1:381857842208:web:3da01d57ab66055f9b6845",
    measurementId: "G-EZD0BBPN1B"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);  //Khởi tạo firebase
  export const analytics = getAnalytics(app);
  export const auth = getAuth(app);
