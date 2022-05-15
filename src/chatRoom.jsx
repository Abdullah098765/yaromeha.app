import {React , useEffect, useState} from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import firebase from 'firebase/app'
import { initializeApp } from "firebase/app";
import firestore, { Timestamp } from 'firebase/firestore'
import { collection, orderBy,where, query, limit, getFirestore, addDoc } from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
;


function ChatRoom(props) {
  var [massege, setmassege] = useState('');


  const auth = getAuth();
  const db = getFirestore();
  const messageRef = collection(db, 'messages');


  // const q1 = query(messageRef,orderBy("createdAt", 'desc'),);
  const q = query(messageRef, where("roomId", "==",props.roomId),);

  const [messages] = useCollectionData(q,);
  const [msgs, setMsgs] = useState([])

  console.log(messages)














  function typeMassege(event) {
    setmassege(event.target.value)

  }

  function onEnterkey(e) {
      if (e.code === 'Enter') {
        sendMassege()
      }
  }

  function sendMassege(event) {
    const currentDate = new Date();
    const timestamp = currentDate.getTime();

    
   
const docRef =  addDoc(collection(db, "messages"), {
    massege:massege,
    createdAt:timestamp,
    roomId:props.roomId,
    writerName:props.writerName

  });
  console.log("Document written with ID: ", docRef.id)
console.log(massege)
    setmassege('')


  }


  return auth.currentUser && (<div>
    <br></br>

<br></br>
      <br></br>


      <input type="text" onKeyDown={onEnterkey} value={massege} onChange={typeMassege}></input> 
      <br></br>
      <button onClick={sendMassege}>Send</button>
      <br></br>
      <br></br>
      {messages && messages.map(messagesData => <div key={messagesData.createdAt}>{ messagesData.writerName+': '+messagesData.massege}</div>)}

      <br></br>
  </div>)
}





export default ChatRoom;


