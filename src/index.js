import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGfUTUbGTbVS1unrHWoRJ0DQF9NrC3Gwk",
  authDomain: "proyecto-react-amsz.firebaseapp.com",
  projectId: "proyecto-react-amsz",
  storageBucket: "proyecto-react-amsz.appspot.com",
  messagingSenderId: "713269436508",
  appId: "1:713269436508:web:70103ef7842db756b00699"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
