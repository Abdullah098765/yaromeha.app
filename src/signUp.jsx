import { React, useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import firebase from 'firebase/app'
import { initializeApp } from "firebase/app";
import firestore, { Timestamp } from 'firebase/firestore'
import { collection, orderBy, query, limit, getFirestore, addDoc } from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import './App.css';


function SignUp(params) {

  const auth = getAuth();


  function signinWithGoogle(params) {

    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        let userData = {
          fullName: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
          uid: result.user.uid,

        }
        const db = getFirestore()
        console.log(auth.currentUser.uid)

        try {
          const docRef = addDoc(collection(db, "users",), userData)
          docRef.then((value) => {
            console.log(value.id);

          });

          console.log("Document written with ID: ",);
        } catch (e) {
          console.error("Error adding document: ", e);
        }

      })

  }

  


  return (
<div className="db">
<button className="Signin" onClick={signinWithGoogle}>Signin wit Google</button>

<div className="App-header">

    </div>
</div>
    )
}

export default SignUp