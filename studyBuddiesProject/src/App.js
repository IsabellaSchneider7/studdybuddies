import React, { useEffect, useState } from "react";
import VideoChat from './VideoChat';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';


firebase.initializeApp({
    apiKey: "AIzaSyAhQPXLX-dGfBbu6LwK1NqWX7dDGovnP1g",
    authDomain: "studybuddies-bdf0b.firebaseapp.com",
    projectId: "studybuddies-bdf0b",
    storageBucket: "studybuddies-bdf0b.appspot.com",
    messagingSenderId: "819278302220",
    appId: "1:819278302220:web:be3a6f8be430961cf2b229",
    measurementId: "G-GR6M89H55F"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

const App = () => {

  const[user] = useAuthState(auth);
  return (
    <div className="app">
      <header>
        <h1>StuddyBuddies</h1>
      </header>
      
      <section >
        {user ? <VideoChat /> : <SignIn />}
      </section>
        <footer>
        <p>
          Made by Ria, Chris, Nick and Isabella
        </p>
      </footer>
    </div>
  );
}

function SignIn()
{
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return(
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

function SignOut(){
  return auth.currentUser &&(
  <button onClick={() => auth.signOut()}> SignOut</button>
  )
}

export default App;
