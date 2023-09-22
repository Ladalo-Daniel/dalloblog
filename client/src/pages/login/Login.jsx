import { NavLink } from "react-router-dom"
import "./login.css"
import { useContext, useRef, useState } from "react"
import { Context } from "../../context/Context";
import axios from "axios";

export default function Login() {
  const [removeModal, setRemoveModal] = useState(true);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false)
   const userRef = useRef();
   const passwordRef = useRef();
   const {dispatch, isFetching} = useContext(Context)

   const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false)
    setSuccess(false)
    dispatch({type:"LOGIN_START"});
    try{
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      setSuccess(true)
      dispatch({type: "LOGIN_SUCCESS", payload: res.data})
    } catch(err){
      dispatch({type: "LOGIN_FAILURE"})
      setError(true);
    }
   }

   const handleRemoveModal = () =>{
    setRemoveModal(false);
    window.history.back();
  }

  // const handleOpen = () => {
  //   setRemoveModal(true)
  // }


  return (
   <>
    {removeModal && 
     <div className="login">
       <div className="loginWrapper" >
       <span className="cancel" onClick={handleRemoveModal}>X</span>
       <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input 
        className="loginInput" 
        type="text" 
        placeholder="Enter your username..." 
        ref={userRef}
        />
        <label>Password</label>
        <input 
        className="loginInput" 
        type="password" 
        placeholder="Enter your password..." 
        ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
        {error ? <span style={{color:"red", marginTop:"10px"}}>Something went Wrong</span> : success && <span style={{color:"green", marginTop:"10px"}}>Login Successful...</span>}
      </form>
      <span>You don't have Account?</span>
          <NavLink to="/register" className="navLink">
            Register
          </NavLink>;
       </div>
    </div>}
   </> 
  )
}
