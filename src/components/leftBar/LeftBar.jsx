import React, { useContext } from "react";
import "./LeftBar.scss";

// import images here

import Freinds from "../../assets/freinds.svg";
import Groups from "../../assets/group.png";
import Market from "../../assets/market.png";
import Watch from "../../assets/group.png";
import Memories from "../../assets/memories.png";
import Events from "../../assets/events.png";
 import Gaming from "../../assets/gaming.png";
 import Gallery from "../../assets/gallery.png";
 import Videos from "../../assets/videos.png";
 import Messages from "../../assets/message.png";
import Tutorials from "../../assets/tutorial.png";
import Courses from "../../assets/course.svg";
import Fund from "../../assets/fund.png";
import { AuthContext } from "../../context/AuthContext";

const LeftBar = () => {
  const {currentUser}=useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">

             <img
              src={currentUser.profileImg}
              alt=""
            />
         
            <span>{currentUser.user}</span>
          </div>

          <div className="item">
            <img src={Freinds} alt="" />
          <span>Freinds</span>

          </div>

          <div className="item">
          <img src={Groups} alt="" />
        <span>Groups</span>

        </div>

        <div className="item">
        <img src={Market} alt="" />
      <span>Market</span>

      </div>

      <div className="item">
      <img src={Watch} alt="" />
    <span>Watch</span>

    </div>

    <div className="item">
    <img src={Memories} alt="" />
  <span>Memories</span>

  </div>

        </div>

        <hr />


        <div className="menu">
        
        <span>Your shortcuts</span>

        <div className="item">
        <img src={Events} alt="" />
      <span>Events</span>

      </div>

        <div className="item">
        <img src={Gaming} alt="" />
      <span>Gamin</span>

      </div>


      <div className="item">
      <img src={Gallery} alt="" />
    <span>Gallery</span>

    </div>

    <div className="item">
    <img src={Videos} alt="" />
  <span>Videos</span>

  </div>

  <div className="item">
  <img src={Messages} alt="" />
<span>Messages</span>

</div>
        </div>

        <hr />


        <div className="menu">
        
        <span>Others</span>

        <div className="item">
        <img src={Fund} alt="" />
      <span>Fund</span>

      </div>

      <div className="item">
      <img src={Tutorials} alt="" />
    <span>Tutorials</span>

    </div>

    <div className="item">
    <img src={Courses} alt="" />
  <span>Courses</span>

  </div>
        
        
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
