import React, { useEffect, useState } from 'react'
import "./sidebar.css"
import img8 from "../../img/img8.jpg"
import axios from "axios"
import { Link } from 'react-router-dom';


export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCat = async () => {
      const res = await axios("/categories");
      setCats(res.data);
    };
    getCat();
  }, [])
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className='sidebarTitle'>ABOUT ME</span>
        <img className='sidebarImg' src={img8} alt="" />
        <p>Yeah! yah curious to know me? Okay that's tottally fine. My name is Ladalo, I'm the president of UPdate!. I'm glad you are here</p>
      </div>
      <div className="sidebarItem">
      <span className='sidebarTitle'>CATEGORIES</span>
      <ul className="sidebarList">
        {cats.map(cat => (
        <Link className="navLinks" to={`/?cat=${cat.name}`} key={cat._id}>
            <li className="sidebarListItem" >{cat.name}</li>
          </Link>
        ))}
      </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
            <i className="sidebarIcon fa-brands fa-square-twitter"></i>
            <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
            <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  )
}
