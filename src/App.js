import { Routes, Route } from 'react-router';
import { initializeApp } from "firebase/app";
import { useAuthState } from 'react-firebase-hooks/auth'
import { getAuth,} from "firebase/auth";
import Dashboard from './dashboard1'
import SignUp from './signUp'
import Group from './group';
import './App.css';


function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyCmpqOzl80y01bEgUoJ8P5QNHjfh9-VF2Y",
    authDomain: "yaromeha-app.firebaseapp.com",
    projectId: "yaromeha-app",
    storageBucket: "yaromeha-app.appspot.com",
    messagingSenderId: "460269542777",
    appId: "1:460269542777:web:50fef46c9b05ab6711a3a8",
    measurementId: "G-49QXQF2J91"
  };
  const app = initializeApp(firebaseConfig);

  const auth = getAuth()

  const [user] = useAuthState(auth)



  return (
    <div >

<header >



      {user ? <div>


        <Routes>
          <Route path="/room:id" element={<Group />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>





      </div> : <div><SignUp /></div>}


      {/* <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="login" element={<Login/>} />
      <Route path="register" element={<Register/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/group" element={<Group/>} />
    </Routes> */}


      </header>




    </div>
  );
}

export default App;
