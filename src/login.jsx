import React from "react";
import { useState } from 'react';
import { useEffect } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup  } from "firebase/auth";








function Login() {

  const [users, setUser] = useState([])



  // useEffect(()=>{


  // },[])

  function signInWithGoogle() {

    var data = {}
{
    const provider = new GoogleAuthProvider();

    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        data = {
          fullName:result.user.displayName,
          email:result.user.email,
          photo:result.user.photoURL,
          uid:result.user.uid,
        }

console.log(data)

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify(data);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:3001/login", requestOptions)
  .then(response => response.text())
  .then(result =>
    window.location = 'http://localhost:3000/home?key='  + result 
  )  .catch(error => console.log('error', error));
        
      });}
    



  }




  return (
    <div>
      <div>

        {/* <h1>LogIn</h1>

      <h4>Email</h4>


      <input type='text' name="email" onChange={handlechange} value={email}></input>



      <h4>Password</h4>


      <input type='text' name="password" onChange={handlechange} value={password}></input>

      <br></br>
      <br></br>

      <button onClick={login}>Login</button> */}
      </div>

      <div>

        <br />
        <br />
        <button onClick={signInWithGoogle}>google</button>
      </div>



    </div>

  )


}
export default Login;

  // var [email, setEmail] = useState('')
  // var [password, setPassword] = useState('')


  // var myHeaders = new Headers();
  // myHeaders.append("as", "sasas");
  // myHeaders.append("Content-Type", "application/json");


  // function handlechange(event) {

  //   if (event.target.name === 'email') {
  //     setEmail(event.target.value)
  //     console.log(email);


  //   }
  //   else if (event.target.name === 'password') {
  //     setPassword(event.target.value)
  //     console.log(password);


  //   }



  // }

  // function login() {

  //   var raw = JSON.stringify({
  //     email: email,
  //     password: password,
  //   });

  //   var requestOptions = {
  //     method: 'POST',
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: 'follow'
  //   };

  //   fetch("http://localhost:3003/login", requestOptions)
  //     .then(response => response.text())
  //     .then(result => {
  //       if (result !== 'Enter Currect Email'){
  //         window.location = 'http://localhost:3000/dashboard'
  //       }
  //       else(alert(result))
  //     })
  //     .catch(error => console.log('error', error));


  //   setEmail('')
  //   setPassword('')

  // }


//   // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCmpqOzl80y01bEgUoJ8P5QNHjfh9-VF2Y",
//   authDomain: "yaromeha-app.firebaseapp.com",
//   projectId: "yaromeha-app",
//   storageBucket: "yaromeha-app.appspot.com",
//   messagingSenderId: "460269542777",
//   appId: "1:460269542777:web:50fef46c9b05ab6711a3a8",
//   measurementId: "G-49QXQF2J91"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// npm install -g firebase-tools
// npm install firebase
//firebase login
//firebase init
//firebase deploy