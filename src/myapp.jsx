 import React from "react";
 import { useState } from 'react';
 import { useEffect } from "react";


function MyApp() {

  var [massege, setMassege] = useState('')
  var [masseges, setMasseges] = useState([])

    var myHeaders = new Headers();
    myHeaders.append("as", "sasas");
    myHeaders.append("Content-Type", "application/json");
    
  useEffect(()=>{
    fetch("http://localhost:3003/")
    .then(response => response.json())
    .then(result => masseges.push(result))
    .catch(error => console.log('error', error));
console.log(masseges)
  }, [])

function handlechange(event) {

 
    setMassege(event.target.value)


    
}

function send() {
 

}

const list = masseges.map((value) => 
  <li>{value}</li>
);

    return (
        <div>

<ol>
  {list}
</ol>
            <input type= 'text' onChange={handlechange} value =  {massege}></input>
<button onClick={send}>Send</button>
        </div>
    )


}
export default MyApp