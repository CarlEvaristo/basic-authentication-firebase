import React from "react"
import { 
  createUserWithEmailAndPassword,
  onAuthStateChanged,  
  signInWithEmailAndPassword,  
  signOut
 } from "firebase/auth"
import { auth } from "./firebase-config"


function App() {
  const [user, setUser] = React.useState({})
  const [registerEmail, setRegisterEmail] = React.useState("")
  const [registerPassword, setRegisterPassword] = React.useState("")
  const [loginEmail, setLoginEmail] = React.useState("")
  const [loginPassword, setLoginPassword] = React.useState("")


  React.useEffect(()=>{
      //=> this checks continuously if the auth user's state (login/logout) changes
      onAuthStateChanged(auth, (currentUser)=>{       //=> works like react useEffect, but takes auth as argument and currentuser as argument of callback
        setUser(currentUser)    //=> if you close browser firebase remembers you didnt logged out with onAuthStateChanged
      })
  })

  function register() {
    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then(res => console.log("response", res))
      .catch(error => console.log("error", error))
  }

  function login() {
    signInWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then(res => console.log("response", res))
      .catch(error => console.log("error", error))
  }

  return (
    <main>
      <h1>Basic Authentication Firebase</h1>

      <div className="inputWrapper">
        <h3>Register User</h3>
        <input type="email" placeholder="Your email..." onChange={(event)=>setRegisterEmail(event.target.value)} value={registerEmail} required />
        <input type="password" placeholder="Your password..."  onChange={(event)=>setRegisterPassword(event.target.value)} value={registerPassword} required />
        <button onClick={register}>Create User</button>
      </div>
      <div className="inputWrapper">
        <h3>Login</h3>
        <input type="email" placeholder="Your email..." onChange={(event)=>setLoginEmail(event.target.value)} value={loginEmail} required />
        <input type="password" placeholder="Your password..." onChange={(event)=>setLoginPassword(event.target.value)} value={loginPassword} required />
        <button onClick={login}>Login</button>
      </div>
      <div className="inputWrapper">
        <h3>User Logged In: {user ? user.email : "Not Logged In"} </h3>
        {user && <button onClick={() => signOut(auth)}>Logout</button>}
      </div>
    </main>
  );
}

export default App;
