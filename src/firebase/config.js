import firebase from 'firebase/app'
// import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDpNTHf4COFPdrfPoiF7tb22180lyQ27c4",
    authDomain: "firegram-64b8a.firebaseapp.com",
    databaseURL: "https://firegram-64b8a-default-rtdb.firebaseio.com",
    projectId: "firegram-64b8a",
    storageBucket: "firegram-64b8a.appspot.com",
    messagingSenderId: "655294158205",
    appId: "1:655294158205:web:b1d6536407a5b21f5de814"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;


export { projectStorage, projectFirestore, timestamp };