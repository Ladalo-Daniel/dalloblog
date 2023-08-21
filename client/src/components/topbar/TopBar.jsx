import './topbar.css'
import img9 from "../../img/img9.jpg"
import { NavLink } from 'react-router-dom'

export default function TopBar() {
  const user = true;
  return (
    <div className='top'>
      <div className="topLeft">
      <i className="topIcon fa-brands fa-square-facebook"></i>
      <i className="topIcon fa-brands fa-square-twitter"></i>
      <i className="topIcon fa-brands fa-square-pinterest"></i>
      <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className=' topListItem'><NavLink className="navLinks" to="/">Home</NavLink></li>
          <li className=' topListItem'><NavLink className="navLinks" to="/error">About</NavLink></li>
          <li className=' topListItem'><NavLink className="navLinks" to="/error">Contact</NavLink></li>
          <li className=' topListItem'><NavLink className="navLinks" to="/write">Write</NavLink></li>
          <li className=' topListItem'> {user && "Logout"} </li>
        </ul>
      </div>
      <div className="topRight">
        <i className="topSearchIcon fas fa-search"></i>
      { user ? (<img src={img9} alt="" className='topImg'/>) :
        ( 
         <ul className="topList">
          <li className=' topListItem'><NavLink className="navLinks" to="/login">Login</NavLink></li>
          <li className=' topListItem'><NavLink className="navLinks" to="/register">Register</NavLink></li>
         </ul>
        )
      }
      </div>
    </div>
  )
}
