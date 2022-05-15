import React from "react";
import { useState } from 'react';
import { useEffect } from "react";
import { getDatabase, ref, set, onValue, child, get, push, update } from "firebase/database";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";







function Home() {

  var [myData, setMyData] = useState({});
  var [allGroups, setAllGroups] = useState([]);
  var [check, setCheck] = useState(true);






  {
    var url = new URL(window.location);
    var c = url.searchParams.get("key");
    console.log(c);
  }




  useEffect(function getData(){

    {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({ myid: c });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("http://localhost:3001/userdata", requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log(result)
          setMyData(result)
        }
        )
        .catch(error => console.log('error', error));
    }




    const dbRef = ref(getDatabase());
    get(child(dbRef, 'groups')).then((snapshot) => {
      if (snapshot.exists()) {
        for (var i in snapshot.val()) {
          let a = allGroups
          a.push(snapshot.val()[i])
          setAllGroups(a)
          setCheck(check)
          console.log(allGroups)
        }

        console.log();
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });

    getData()

  }, [])






  function createagroup() {
    let groupName = prompt('Enter group name')

    const db = getDatabase();
    set(ref(db, 'groups/' + c), );


    setCheck(!check)
    console.log(check)
    // var postElement = document.getElementById('div');


    window.open("http://localhost:3000/group?goid=" + c);






  }

  function addGroup(p) {
    console.log(p)

    const db = getDatabase();

    // A post entry.
    const postData = {
      name: myData.fullName,
      email: myData.email,
      a: c,
    };


    const updates = {};
    updates['groups/' + p + '/GroupMembers/' + c] = postData;


    window.open('http://localhost:3000/group?goid=' + p)


    return update(ref(db), updates);

  }



  const groups = allGroups.map((value) => <li onClick={() => addGroup(value.groupOwnerId)}>{value.groupName}</li>)

  return (

    <div>
      <h3>{myData.fullName}</h3>
      <button onClick={createagroup}>create a group</button>

      <div id="div" >
        <ul>
          {groups}
        </ul>
      </div>

    </div>
  )


}
export default Home;