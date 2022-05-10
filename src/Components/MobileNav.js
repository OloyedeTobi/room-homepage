import { useState } from "react";
import * as VSIcon from 'react-icons/vsc';
import '../Styles/Navbar.css';

export const MobileNav = () =>{
    const [expand, setExpand] = useState(false)


   
   
    const toggleNav = () =>{
      setExpand(prev => !prev)
    }

    return expand ? (
      <div className="nav-shadow">
        <div className="mobile-nav mobile-container">
            <VSIcon.VscChromeClose onClick = {toggleNav} fontSize="1.5em"  color="grey"/>
            <nav>
                <a href="/">home</a>
                <a href="/">shop</a>
                <a href="/">about</a>
                <a href="/">contact</a>
            </nav>
        </div>
    </div>
    )
    :
    <div className = "mobile-nav hamburger">
      <VSIcon.VscMenu onClick = {toggleNav} fontSize="1.5em" color="white"/>
      <p className="logo">room</p>
   </div>
   }

