import React from "react";
import { useState } from 'react';
import { useEffect } from "react";


function Register() {

  var [firstname, setFirstname] = useState('')
  var [email, setEmail] = useState('')
  var [password, setPassword] = useState('')

  var [masseges, setMasseges] = useState([])

  var myHeaders = new Headers();
  myHeaders.append("as", "sasas");
  myHeaders.append("Content-Type", "application/json");

  //  useEffect(()=>{
  //    fetch("http://localhost:3003/")
  //    .then(response => response.json())
  //    .then(result => masseges.push(result))
  //    .catch(error => console.log('error', error));
  // console.log(masseges)
  //  }, [])

  function handlechange(event) {

    if (event.target.name === 'name') {
      setFirstname(event.target.value)
      console.log(firstname);

    }
    else if (event.target.name === 'email') {
      setEmail(event.target.value)
      console.log(email);


    }
    else if (event.target.name === 'password') {
      setPassword(event.target.value)
      console.log(password);


    }



  }

  function register() {
    var raw = JSON.stringify({
      fullName: firstname,
      email:email,
      password:password

    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

let a = ''
    
    fetch("http://localhost:3003/register", requestOptions)
      .then(response => response.text())
      .then(result => {
        if (result === 'Successfully registered'){
          window.location = 'http://localhost:3000/login'
    
        }
        else {
          alert(result)
        }
          })
      .catch(error => console.log('error', error));


    setFirstname('');
    setEmail('');
    setPassword('');


    console.log(masseges)
   

  }



  return (
    <div>

      <h1>Sign Up</h1>

      <h4>Fullname</h4>


      <input type='text' name="name" onChange={handlechange} value={firstname}></input>

      <h4>Email</h4>


      <input type='text' name="email" onChange={handlechange} value={email}></input>



      <h4>Password</h4>


      <input type='text' name="password" onChange={handlechange} value={password}></input>

      <br></br>
      <br></br>

      <button onClick={register}>Register</button>
    </div>
  )


}
export default Register