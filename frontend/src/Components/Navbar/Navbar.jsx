import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

const Navbar = ({setshowLogin}) => {

  const [menu,setMenu] = useState("home");

  return (
    <div className='navbar'>
        <Link to='/'><img src={assets.logo} alt="" className='navbar-logo'/></Link>
        <ul className="navbar-menu">
          <Link to='/' onClick={()=>setMenu("home")} className={menu === "home"?"active":""}>Home</Link>
          <a href='#menu' onClick={()=>setMenu("menu")} className={menu === "menu"?"active":""}>Menu</a>
          <a href='#contact' onClick={()=>setMenu("contact")} className={menu === "contact"?"active":""}>Contact-us</a>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} alt="" />
          <div className="navbar-search-icon">
            <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
            <div className="dot"></div>
          </div>
          <button onClick={()=>setshowLogin(true)}>Sign-in</button>
        </div>
    </div>
  )
}

export default Navbar