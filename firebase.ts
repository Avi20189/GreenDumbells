
import {getApps, initializeApp} from 'firebase/app';

// import 'firebase/auth';
// import 'firebase/database';
// import 'firebase/firestore';
// import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAQUYvIgnyioNDa9tZT6ewM3BEn7XZ281I",
    authDomain: "greendumbells-9298d.firebaseapp.com",
    projectId: "greendumbells-9298d",
    storageBucket: "greendumbells-9298d.appspot.com",
    messagingSenderId: "710988772241",
    appId: "1:710988772241:web:5186453ee63039242ee030",
    measurementId: "G-2ZZ79H74XR"
  };

const apps = getApps();
if (!apps.length) {
  initializeApp(firebaseConfig);
}