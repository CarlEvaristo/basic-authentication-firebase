import React from "react"
import { 
  createUserWithEmailAndPassword,
  onAuthStateChanged,  
  signOut
 } from "firebase/auth"
import { auth } from "./firebase-config"


function App() {
  const [user, setUser] = React.useState({})
  const [registerEmail, setRegisterEmail] = React.useState("")
  const [registerPassword, setRegisterPassword] = React.useState("")


  React.useEffect(()=>{
      //=> this checks continuously if the auth user's state (login/logout) changes
      onAuthStateChanged(auth, (currentUser)=>{       //=> works like react useEffect, but takes auth as argument and currentuser as argument of callback
        setUser(currentUser)    //=> if you close browser firebase remembers you didnt logged out with onAuthStateChanged
      })
  })


  // const [loginEmail, setLoginEmail] = React.useState("")
  // const [loginPassword, setLoginPassword] = React.useState("")

  function register() {
    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then(res => console.log(res))
      .catch(error => console.log("error", error))
  }

  return (
    <main>
      <h1>Basic Authentication Firebase</h1>

      <div>
        <h3>Register User</h3>
        <input type="email" placeholder="Your emailaddress..." onChange={(event)=>setRegisterEmail(event.target.value)}  />
        <input type="password" placeholder="Your password..."  onChange={(event)=>setRegisterPassword(event.target.value)}  />
        <button onClick={register}>Create User</button>
      </div>
      {/* <div>
        <h3>Login</h3>
        <input type="email" placeholder="Your emailaddress..." onChange={(event)=>setLoginEmail(event.target.value)} required />
        <input type="password" placeholder="Your password..." onChange={(event)=>setLoginPassword(event.target.value)} required />
        <button>Login</button>
      </div> */}
      <h3>User Logged In: {user ? user.email : "Not Logged In"} </h3>
      <button onClick={() => signOut(auth)}>Logout</button>
    </main>
  );
}

export default App;
