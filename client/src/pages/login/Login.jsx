import { NavLink } from "react-router-dom"
import "./login.css"

export default function Login() {
  return (
    <div className="login">
       <div className="loginWrapper">
       <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." />
        <button className="loginButton">Login</button>
      </form>
      <span>You don't have Account?</span>
          <NavLink to="/register" className="navLink">
            Register
          </NavLink>
       </div>
    </div>
  )
}
