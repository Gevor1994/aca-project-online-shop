import firebase from 'firebase';
import 'firebase/firestore';


const config = {
  apiKey: "AIzaSyBrZuEbqGWfzAWEezy46G3XqsniucmlwmE",
    authDomain: "verjnakan-proyekt.firebaseapp.com",
    databaseURL: "https://verjnakan-proyekt.firebaseio.com",
    projectId: "verjnakan-proyekt",
    storageBucket: "verjnakan-proyekt.appspot.com",
    messagingSenderId: "764612146535",
    appId: "1:764612146535:web:5ae37556a4d31c79"
};

export  function initFirebase() {
  firebase.initializeApp(config);
}

export default initFirebase;
