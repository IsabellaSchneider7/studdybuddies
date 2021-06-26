import firebase from "firebase";
import "firebase/auth";
require('dotenv').config()

firebase.initializeApp({
    // apiKey: "AIzaSyAhQPXLX-dGfBbu6LwK1NqWX7dDGovnP1g",
    // authDomain: "studybuddies-bdf0b.firebaseapp.com",
    // databaseURL: "https://studybuddies-bdf0b-default-rtdb.firebaseio.com",
    // projectId: "studybuddies-bdf0b",
    // storageBucket: "studybuddies-bdf0b.appspot.com",
    // messagingSenderId: "819278302220",
    // appId: "1:819278302220:web:f1e6cf46f3697f88f2b229",
    // measurementId: "G-SJ4EK4717E"
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL : process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
});
console.log("hi");
export const firebaseRef = firebase;
export const auth = firebase.auth();
export const db = firebase.firestore();