import * as firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB8bPHurJRN5A7p44GKo4bJduei2mZ6ig4",
    authDomain: "piznaysvoye-91c85.firebaseapp.com",
    databaseURL: "https://piznaysvoye-91c85.firebaseio.com",
    projectId: "piznaysvoye-91c85",
    storageBucket: "piznaysvoye-91c85.appspot.com",
    messagingSenderId: "298123680656",
    appId: "1:298123680656:web:b2beeeb3158b5000a1f115",
    measurementId: "G-GJTZXKSCP5"
  };

  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export {storage, firebase as default};