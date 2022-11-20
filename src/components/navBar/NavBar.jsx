import React, { useContext } from "react";
import { Link } from "react-router-dom";
// react icons to use import here

import { AiFillHome, AiFillNotification, AiTwotoneMail } from "react-icons/ai";
import { CiDark, CiLight } from "react-icons/ci";
import { BsFillGridFill, BsFillPersonFill, BsSearch } from "react-icons/bs";

import "./NavBar.scss";
import { DarkModeContext } from "../../context/DarkModeContext";
import { AuthContext } from "../../context/AuthContext";

const NavBar = () => {

  const {darkMode, toggle}=useContext(DarkModeContext);
  const {currentUser}=useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>GitaSocial</span>
        </Link>
        <AiFillHome />
        
        {darkMode ? <CiLight onClick={toggle}/> : <CiDark onClick={toggle}/>  }
        <BsFillGridFill />

        {/*search inputs goea here*/}

        <div className="search">
          <BsSearch />
          <input type="text" placeholder="Search...." />
        </div>
      </div>

      <div className="right">
        <BsFillPersonFill />
        <AiTwotoneMail />
        <AiFillNotification />

        <div className="user">
          <img
            src={currentUser.profileImg}
            alt=""
          />
          <span>{currentUser.user}</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
