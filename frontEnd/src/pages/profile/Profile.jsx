import React from "react";

import "./Profile.scss";

// import icons
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineTwitter,
  AiOutlineMail,
} from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { BiDotsVertical, BiLocationOn, BiLocationPlus } from "react-icons/bi";
import { GrLanguage } from "react-icons/gr";
import Post from "../../components/post/Post";
import Posts from "../../components/posts/Posts";

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
      
      <img src="https://images.template.net/wp-content/uploads/2014/11/Natural-Facebook-Cover-Photo.jpg" className="cover"  alt="cover"/>
    
   
     

      <img
      src="https://i.insider.com/617127ab33f4b300189ad412?width=1136&format=jpeg" className="profileImg"
      alt="profile"/>
      
       
      </div>

      <div className="profileContainer">
      <div className="uinfo">
        <div className="left">
          <a href="http://facebook.com">
            <AiFillFacebook fontSize="large" />
          </a>

          <a href="http://facebook.com">
            <AiOutlineTwitter fontSize="large" />
          </a>

          <a href="http://facebook.com">
            <AiFillLinkedin fontSize="large" />
          </a>

          <a href="http://facebook.com">
            <AiFillInstagram fontSize="large" />
          </a>

          <a href="http://facebook.com">
            <BsPinterest fontSize="large" />
          </a>
        </div>
        <div className="center">
          <span>Fonyuy Gita</span>

          <div className="info">
            <BiLocationPlus />
            <span>CAMEROON</span>
            <GrLanguage />
            <span>Gita.com</span>
          </div>
          <button>Follow</button>
        </div>
        <div className="right">
          <AiOutlineMail />
          <BiDotsVertical />
        </div>
      </div>
    </div>
    <Posts/>
    </div>
  );
};

export default Profile;
