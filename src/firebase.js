import firebase from "firebase";

// Initialize Firebase
var config = {
    apiKey: "AIzaSyB91tTPW7-E8ZI5QveMKI25c_BykchCIFI",
    authDomain: "project5-cff1c.firebaseapp.com",
    databaseURL: "https://project5-cff1c.firebaseio.com",
    projectId: "project5-cff1c",
    storageBucket: "project5-cff1c.appspot.com",
    messagingSenderId: "378231283319"
};
firebase.initializeApp(config);

export default firebase;
