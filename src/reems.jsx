import React from "react";
import { useState } from 'react';
import { collection, setDoc,  doc, getFirestore} from 'firebase/firestore'
import { useCollectionData,} from 'react-firebase-hooks/firestore'
import { getAuth } from 'firebase/auth';
import GroupMembers from "./groupMembers";
import './App.css';







function Room(props) {
    const [goid, setGoid] = useState('')

    const auth = getAuth()

    const db = getFirestore();

    const roomsRef = collection(db, 'rooms',)

    const [rooms] = useCollectionData(roomsRef)

    console.log(rooms)





    function addGroup(params) {
        console.log(params.uUid)


        
        
  setDoc(doc(db, "members",   auth.currentUser.uid,),{
        memberName: auth.currentUser.displayName,
        memberProfilePic: auth.currentUser.photoURL,
        memberId: auth.currentUser.uid,
        memberEmail: auth.currentUser.email,

        roomId:params.groupOwnerId
        
       

    }).then((value=>{
    console.log("Group Created with ID: ",);

    
  }))
  window.open('http://localhost:3000/room:'+params.groupOwnerId)

        // setDoc(doc(db, "members", auth.currentUser.uid), {
        //     memberName: auth.currentUser.displayName,
        //     memberProfilePic: auth.currentUser.photoURL,
        //     memberId: auth.currentUser.uid,
        //     roomId: params.uUid,

        // }).then((a)=>{
        //     window.open('http://localhost:3000/room:' + params.groupOwnerId)

        // })



    }

    return (
        <div>
            
            {rooms && rooms.map(roomData => <div  key={roomData.groupName}>
            <div className="body">
  
  <div className='Cart-Container'>
            
  <div className='Header'>
 {/* <h5 className='Action'>Remove all</h5> */}
 </div>
 <div className='Cart-Items'>
 <div className='image-box'>
 <img className="roomonerpic" src={roomData.groupOwnerpic}  ></img>
 <h3 className='Heading'>{roomData.groupOwnerName?roomData.groupOwnerName:''}</h3>

 </div>
 <div className='about'>
 <h1 className='title'>{roomData.groupName} <br></br>
 <br></br>
 <img className='member' src='https://lh3.googleusercontent.com/a-/AOh14Gjy9RA2a4EBFyW4j5BmjdPSnRnthDvtdIIe2yC3dA=s96-c' style={{ height:'30px' }}/>
 
 </h1>
 
 </div>
 <div className='counter'></div>
 <div className='prices'></div>

 
 </div>
  <br></br>

 <hr ></hr> 
 <div className='checkout'>
 <div className='total'>
 <div>
 <div className='items'>2 items</div>
 </div>
 <div className='total-amount'>$6.18</div>
 </div>
 <button className='button' onClick={() => addGroup(roomData)}>Join Now</button>
 </div>

            </div>
            </div>
        
            </div>)}

        <br></br>
  
            
        
        </div>
    )


}
export default Room;
