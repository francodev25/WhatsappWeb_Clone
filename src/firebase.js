import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAl-LJ82LIg1MEJLQ3Dsm5Jhkz-klX7QMk",
    authDomain: "whatsapp-clone-202125.firebaseapp.com",
    projectId: "whatsapp-clone-202125",
    storageBucket: "whatsapp-clone-202125.appspot.com",
    messagingSenderId: "426127106937",
    appId: "1:426127106937:web:45c182f96a2fc714f185a8",
    measurementId: "G-G9K2277ZHV"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider}
export default db;
