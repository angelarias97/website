import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import App from './App';
import './index.css';

//import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp({
    apiKey: "AIzaSyAxDs_iQm645t7pfqTohIHgWI5ntUYffHE",
    authDomain: "website-6155a.firebaseapp.com",
    databaseURL: "https://website-6155a.firebaseio.com",
    //projectId: "website-6155a",
    storageBucket: "website-6155a.appspot.com",
    messagingSenderId: "180194578604"
});

ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
