import { React } from "react";
import { getAuth, signOut } from "firebase/auth";
import { collection, setDoc, doc, where, query, limit, getFirestore, addDoc } from 'firebase/firestore'
import { useCollectionDataOnce } from 'react-firebase-hooks/firestore'
import Room from "./reems";
import './App.css';



function Dashboard(params) {

  // // var [massege, setmassege] = useState('');


  const auth = getAuth();
  const db = getFirestore();
  const usersRef = collection(db, 'users');
  const q = query(usersRef, where("uid", "==", auth.currentUser.uid), limit(1));

  const [users] = useCollectionDataOnce(q);




  console.log(users)
  function userDidSignOut(params) {

    signOut(auth).then(() => {
      console.log('Sign-out successful.')
    }).catch((error) => {
      // An error happened.
    });
  }







  // function typeMassege(event) {
  //   setmassege(event.target.value)
  //   console.log(massege)

  // }

  // function sendMassege() {
  //   const currentDate = new Date();
  //   const timestamp = currentDate.getTime();
  //   try {
  //     const docRef =  addDoc(messageRef, {
  //       text:massege,
  //        createdAt: timestamp,
  //        uid:auth.currentUser.uid
  //     })
  //     docRef.then((value) => {
  //       console.log(value.id);

  //     });

  //     console.log("Document written with ID: ", );
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }

  //   setmassege('')


  // }




  function groupCreation() {
    const db = getFirestore()
 let a = prompt('Enter your group name!')
    setDoc(doc(db, "rooms", auth.currentUser.uid), {
      groupName: a,
      groupOwnerId: auth.currentUser.uid,
      groupOwnerName: auth.currentUser.displayName,
      GroupMembers: [],
      groupOwnerpic: auth.currentUser.photoURL
    }).then((value => {
      console.log("Group Created with ID: ",);
      window.open('http://localhost:3000/room:' + auth.currentUser.uid)


    }))



  }
















  return auth.currentUser && (

<div>

    <div className="db">
      <button className="SignOuta" onClick={userDidSignOut}>SignOut</button>
      <button className="Create-a-group" onClick={groupCreation}>Create a group</button>
      <Room />

      <div className="App-header">

        {' '}


        {/* {users[0].fullName !== ''?users[0].fullName:''} */}


        <br></br>
        <br></br>
        <br></br>


        {/* {users && messages.map(msg=><div>{msg.uid === auth.currentUser.uid ? 'sent:':'received:'}{ msg.text}</div>)} */}

        {/* <br></br>

    <button onClick={userDidSignOut}>SignOut</button>
<br></br>
      <br></br>

      <input type="text" value={massege} onChange={typeMassege}></input> 
      <br></br>
      <button onClick={sendMassege}>Send</button>
      <br></br>
      <br></br>
      <br></br> */}
      </div>
    </div>
    </div>)
    
}





export default Dashboard;


