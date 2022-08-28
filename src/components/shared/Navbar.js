import React, { useEffect, useRef } from "react";
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { ReactComponent as ProfileIcon } from "../assets/svg/personOutlineIcon.svg";
import { ReactComponent as ExploreIcon } from "../assets/svg/exploreIcon.svg";
import { ReactComponent as OffersIcon } from "../assets/svg/localOfferIcon.svg";

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const pathMatchRoute =(path)=>{
    if(location.pathname===path) return true
  }
  const activeLink=(path,e)=> {
    console.log('path =',path,'event =',e)
    let list=(document.querySelectorAll("li.navbar-item"))
    list.forEach((item) => {
      let target =e.target
      while(target.tagName !=="LI"){
        target=target.parentNode
      }
      if(item !== target){
        item.classList.remove("active");
        target.classList.add("active");
        console.log("item class", e.target.classList,'item tagname',e.target.tagName);
      }
    });
    navigate(path)
  }
  useEffect(() => {
  }, []);
  return (
    <header className="navbar">
      <div className="navbar-logo"></div>
      <nav className="navbar-container">
        
        <ul className="navbar-items">
          <li className={`navbar-item ${pathMatchRoute('/')?'active':''}`} onClick={(e)=>activeLink('/',e)}>
            <ExploreIcon
              className="navbar-item-icon"
              fill="#2c2c2c"
              width="36px"
              height="36px"
            />
            <p className="navbar-item-text">Explore</p>
          </li>
          <li className={`navbar-item ${pathMatchRoute('/profile')?'active':''}`} onClick={(e)=>activeLink('/profile',e)}>
            <ProfileIcon
              className="navbar-item-icon"
              fill="#2c2c2c"
              width="36px"
              height="36px"
            />
            <p className="navbar-item-text">Profile</p>
          </li>
          <li className={`navbar-item ${pathMatchRoute('/offers')?'active':''}`} onClick={(e)=>activeLink('/offers',e)}>
            <OffersIcon
              className="navbar-item-icon"
              fill="#2c2c2c"
              width="36px"
              height="36px"
            />
            <p className="navbar-item-text">Offers</p>
          </li>
          <div className="indicator"></div>
        </ul>
        
      </nav>
    </header>
  );
}
