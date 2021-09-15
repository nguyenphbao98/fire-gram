// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB8sfQv33qobjggvVQfTchDialxFPSaF9g",
    authDomain: "firegram-420ac.firebaseapp.com",
    projectId: "firegram-420ac",
    storageBucket: "firegram-420ac.appspot.com",
    messagingSenderId: "136367605739",
    appId: "1:136367605739:web:e074dd7da486d03a9bfbae"
};

// Initialize Firebase
firebase.initializeApp({...firebaseConfig});

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };


