// Firebase SDK

import { initializeApp }

from

"https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";

import {

getAuth

}

from

"https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";

import {

getFirestore

}

from

"https://www.gstatic.com/firebasejs/11.7.1/firebase-firestore.js";

// Replace these values with YOUR Firebase values

const firebaseConfig = {
  apiKey: "AIzaSyBSgJHB9mQH_jN33TKJJ4gKEC-QUzWgIQQ",
  
  authDomain: "hasseeb-achievers-academy.firebaseapp.com",
  
  projectId: "hasseeb-achievers-academy",
  
  storageBucket: "hasseeb-achievers-academy.firebasestorage.app",
  
  messagingSenderId: "314567063325",
  
  appId: "1:314567063325:web:bde4981721cf88b207d3f4"

};

const app =

initializeApp(

firebaseConfig

);

export const auth =

getAuth(app);

export const db =

getFirestore(app);
