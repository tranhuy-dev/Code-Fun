import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBJ0Lz__GRXhXWzijR35Ao0SEOgvb5Pq40",
    authDomain: "huytran-3e2fe.firebaseapp.com",
    databaseURL: "https://huytran-3e2fe.firebaseio.com",
    projectId: "huytran-3e2fe",
    storageBucket: "huytran-3e2fe.appspot.com",
    messagingSenderId: "969336951291",
    appId: "1:969336951291:web:c1c6b7c77e407befa7fb5e",
    measurementId: "G-8WFHMJ45TS"
};
firebase.initializeApp(firebaseConfig)
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
