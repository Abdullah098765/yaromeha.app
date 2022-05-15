import React from "react";
import { useState } from 'react';
import { useEffect } from "react";
import { getAuth, } from "firebase/auth";
import GroupMembers from "./groupMembers";
import { getDoc, collection,deleteDoc ,doc, updateDoc, orderBy, where, query, limit, getFirestore, addDoc } from 'firebase/firestore'
import { useCollectionData, } from 'react-firebase-hooks/firestore'
import ChatRoom from "./chatRoom";


  function Group(props) {
  const auth = getAuth();
    
    const [groupData, setData] = useState({})
    const [check, setcheck] = useState(true)
    const [check1, setcheck1] = useState(true)
    var url = window.location.href
    var id = url.substring(url.lastIndexOf(':') + 1);
    console.log(id)
    const db = getFirestore();

    const membersRef = collection(db, 'members');
    const q = query(membersRef, where("roomId", "==",id),limit(100));
  
    const [members] = useCollectionData(q);
    useEffect(()=>{

    },[members])
    console.log(members)
  
    
const [member, setMembers] = useState({
  memberName: 'Poona',
  memberProfilePic: '',
  memberId: 'auth.currentUser.uid',
  roomId: ' params.uUid',

})



    const roomsRef = collection(db, 'rooms',)

    if (check) {
      const docRef = doc(collection(db, "rooms"), id);
      const docSnap = getDoc(docRef);
      docSnap.then(a => {
        console.log(a.data())
        setData(a.data())
        setcheck(false)
      })

      const membersRef = doc(collection(db, "members"), id);
      const membersSnap = getDoc(membersRef);
      docSnap.then(a => {
        console.log(a.data())
        setMembers(a.data())
        setcheck(false)
      }
      )
    }


    window.onbeforeunload = a
    function a(){
     delet()

    
    }




function delet(){
   deleteDoc(doc(db, "members", auth.currentUser.uid)).then((a)=>{
window.close()
  console.log(a)
})

}




    return (
      <div>
        <button  onClick={delet}>leave</button>
        Room{' ' + groupData.groupName}
        <br></br>
        
        <br></br>
        messages
        <ChatRoom roomId = {id} writerName = {auth.currentUser.displayName} whoSentMsg = {members}></ChatRoom>

        <br></br>

<h4>Group members</h4>
{members && members.map(membersData => <div key={membersData.memberEmail}>{membersData.memberName}</div>)}


        <br></br>


        {/* {messages && messages.map(messagesData => <div key={messagesData.createdAt}>{messagesData.massege}</div>)} */}

      </div>
    )


  }
export default Group;

