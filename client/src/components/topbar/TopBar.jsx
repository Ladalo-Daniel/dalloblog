import './topbar.css'
import logo from "../../img/logo3.png"
import { Link, NavLink } from 'react-router-dom'
import { useContext, useState } from 'react'
import { Context } from '../../context/Context'
import Prompt from '../prompt/Prompt'

export default function TopBar() {
 const {user, dispatch} = useContext(Context)
 const [searchInput, setSearchInput] = useState(false)
//  const [isActive, setIsActive] = useState(false)
 const [mobile, setMobile] = useState(false)
 const [tablet, setTablet] = useState(false)
 const [laptop, setLaptop] = useState(false)
 const [prompt, setPrompt] = useState(false);
 const PF = "http://localhost:5000/images/"

 const [menubarClick, setMenubarClick] = useState(false);

// const handleLogout = () => {
//   dispatch({type: "LOGOUT"});
// }

// const handlePrompt = () => {
//   setPrompt(true)
// }

const handleLogout = () => {
  setPrompt(true); // Show the logout confirmation prompt
  setMenubarClick(false)
};

const handlePromptConfirm = () => {
  dispatch({ type: "LOGOUT" });
  setPrompt(false); // Hide the prompt after confirming
};

const handlePromptCancel = () => {
  setPrompt(false); // Hide the prompt
};

const ToggleMenubar = () => {
  setMenubarClick(!menubarClick)
}

const closeMobileMenu = () => {
  setMenubarClick(false)
}

// const handleActiveLink = () => {
//  return isActive? "activeLink" : "navLinks"
// }

  return (
    <div className='top'>
      <div className="topLeft">
        <h3>UPdate!</h3>
      </div>
      <div className="topCenter" onClick={() => setSearchInput(false)}>
        <ul className={menubarClick ? "topList active" : "topList"}>
          <li className=' topListItem'><NavLink className={({isActive}) => isActive? "activeLink" : "navLinks"} to="/" onClick={closeMobileMenu}>Home</NavLink></li>
          <li className=' topListItem'><NavLink className={({isActive}) => isActive? "activeLink" : "navLinks"} to="/about" onClick={closeMobileMenu}>About</NavLink></li>
          <li className=' topListItem'><NavLink className={({isActive}) => isActive? "activeLink" : "navLinks"} to="/error" onClick={closeMobileMenu}>Contact</NavLink></li>
          <li className=' topListItem'><NavLink className={({isActive}) => isActive? "activeLink" : "navLinks"} to="/write" onClick={closeMobileMenu}>DropUpdate</NavLink></li>
         {!user && <li className=' topListItem'><NavLink className="navLinks" to="/register" onClick={closeMobileMenu}>Register</NavLink></li>}
          <li className=' topListItem' onClick={handleLogout} > {user && "Logout"} </li>
        </ul>
      </div>
      <div className="topRight">
        {searchInput?
         (<input 
          type='text' 
          placeholder='Search here...' 
          autoFocus
          className='topSearchInput'
          >
          </input> )
           :
          (<i className="topSearchIcon fas fa-search" onClick={()=> setSearchInput(true)}></i>)}
      { user ? (
        <Link to={"/setting"}>
        <img src={PF+user.profilePic} alt="" className='topImg'/>
        </Link>
      ) :
        ( 
         <ul className="topListAccount">
          <li className=' topListItem'><NavLink className="navLinks" to="/login">Login</NavLink></li>
         </ul>
        )
      }
      </div>
      {prompt && (
        <Prompt
          message="Are you sure you want to logout?"
          onConfirm={handlePromptConfirm}
          onCancel={handlePromptCancel}
        />
      )}

   <div onClick={ToggleMenubar} className='topIconContainer'>
      <i className={menubarClick ? 'fas fa-times topIcon' : 'fas fa-bars topIcon'}></i>
      </div>
    </div>
  )
}
