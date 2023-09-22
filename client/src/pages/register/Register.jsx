import { NavLink } from "react-router-dom"
import "./register.css"
import { useEffect, useRef, useState } from "react"
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false)
  const [removeModal, setRemoveModal] = useState(true)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false)
    setSuccess(false)
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password
      });
      res.data && window.location.replace("/login");
      setSuccess(true)
    } catch(err){
      setError(true)
      console.log(err)};
    
  };

  const handleRemoveModal = () =>{
    setRemoveModal(false);
    window.history.back();
  }

  // const handleOpen = () => {
  //   window.addEventListener("click", () => setRemoveModal(false))
  // }

  return (
    <>
    {removeModal && 
    <div className="register">
        <div className="registerWrapper">
          <span className="cancel" onClick={handleRemoveModal}>X</span>
        <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={handleSubmit}>
            <label>Username</label>
            <input 
            className="registerInput" 
            type="text" 
            placeholder="Enter your username..."
            onChange={e => setUsername(e.target.value)}
             />
            <label>Email</label>
            <input 
            className="registerInput" 
            type="text" 
            placeholder="Enter your email..."
            onChange={e => setEmail(e.target.value)}
             />
            <label>Password</label>
            <input 
            className="registerInput" 
            type="password" 
            placeholder="Enter your password..."
            onChange={e => setPassword(e.target.value)}
             />
            <button className="registerButton" type="submit">Register</button>
            {error ? <span style={{color:"red", marginTop:"10px"}}>Something went Wrong</span> : success && <span style={{color:"green", marginTop:"10px"}}>Registration Successful...</span>}
        </form>
        <span>You don't have Account?</span>
          <NavLink to="/login" className="navLink">
            Login
          </NavLink>
     </div>
    </div>}
    </>
  )



  
}

// const modalRef = useRef(null);
// const [modalVisible, setModalVisible] = useState(false); // State to control modal visibility

// const handleOutsideClick = (event) => {
//   if (modalRef.current && !modalRef.current.contains(event.target)) {
//     setModalVisible(false); // Close the modal when clicking outside
//   }
// };

// useEffect(() => {
//   document.addEventListener("click", handleOutsideClick);
//   return () => {
//     document.removeEventListener("click", handleOutsideClick);
//   };
// }, []);


// return (
//   <div className={`register ${modalVisible ? "modalOpen" : "modalClosed"}`}>
//     <div className="registerWrapper" ref={modalRef}>
//       <span className="registerTitle">Register</span>
//       <form className="registerForm">
//         <label>Username</label>
//         <input className="registerInput" type="text" placeholder="Enter your username..." />
//         <label>Email</label>
//         <input className="registerInput" type="text" placeholder="Enter your email..." />
//         <label>Password</label>
//         <input className="registerInput" type="password" placeholder="Enter your password..." />
//         <button className="registerButton">Register</button>
//       </form>
//         <span>You have Account?</span>
//         <NavLink to="/login" className="navLink">
//           Login
//         </NavLink>
//     </div>
//   </div>
// );