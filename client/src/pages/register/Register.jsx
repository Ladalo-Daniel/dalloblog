import { NavLink } from "react-router-dom"
import "./register.css"
import { useEffect, useRef, useState } from "react"

export default function Register() {
  const modalRef = useRef(null);
  const [modalVisible, setModalVisible] = useState(false); // State to control modal visibility

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setModalVisible(false); // Close the modal when clicking outside
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  
  return (
    <div className={`register ${modalVisible ? "modalOpen" : "modalClosed"}`}>
      <div className="registerWrapper" ref={modalRef}>
        <span className="registerTitle">Register</span>
        <form className="registerForm">
          <label>Username</label>
          <input className="registerInput" type="text" placeholder="Enter your username..." />
          <label>Email</label>
          <input className="registerInput" type="text" placeholder="Enter your email..." />
          <label>Password</label>
          <input className="registerInput" type="password" placeholder="Enter your password..." />
          <button className="registerButton">Register</button>
        </form>
          <span>You have Account?</span>
          <NavLink to="/login" className="navLink">
            Login
          </NavLink>
      </div>
    </div>
  );

  // return (
  //   <div className="register">
  //       <div className="registerWrapper">
  //       <span className="registerTitle">Register</span>
  //       <form className="registerForm">
  //           <label>Username</label>
  //           <input className="registerInput" type="text" placeholder="Enter your username..." />
  //           <label>Email</label>
  //           <input className="registerInput" type="text" placeholder="Enter your email..." />
  //           <label>Password</label>
  //           <input className="registerInput" type="password" placeholder="Enter your password..." />
  //           <button className="registerButton">Register</button>
  //       </form>
  //       <button className="registerLoginButton"><NavLink to="/login" className="navLinks">Login</NavLink></button>
  //    </div>
  //   </div>
  // )
}
