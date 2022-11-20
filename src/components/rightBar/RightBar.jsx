import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import "./RightBar.scss";
const RightBar = () => {
  const {currentUser}=useContext(AuthContext);

  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestion For you</span>
          <div className="user">
            <div className="userInfo">
              <img
                src={currentUser.profileImg}
                alt=""
              />
              <span>{currentUser.user}</span>
            </div>
            <div className="buttons">
              <button className="button">Follow</button>
              <button className="button">Dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://st4.depositphotos.com/13201226/30953/i/600/depositphotos_309534608-stock-photo-data-protected-with-blue-force.jpg"
                alt=""
              />
              <span>Fonyuy Patrick</span>
            </div>
            <div className="buttons">
              <button className="button">Follow</button>
              <button className="button">Dismiss</button>
            </div>
          </div>
        </div>

        <div className="item">
          <span>Latest Activities</span>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://st4.depositphotos.com/13201226/30953/i/600/depositphotos_309534608-stock-photo-data-protected-with-blue-force.jpg"
                alt=""
              />
              <p style={{ fontSize: "12px", color: "black" }}>
                <span>Jenet Binla </span>
                Changed their cover picture
              </p>
            </div>

            <span>1 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://st4.depositphotos.com/13201226/30953/i/600/depositphotos_309534608-stock-photo-data-protected-with-blue-force.jpg"
                alt=""
              />
              <p>
                <span>Jenet Binla </span>
                Changed their cover picture
              </p>
            </div>

            <span>1 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://st4.depositphotos.com/13201226/30953/i/600/depositphotos_309534608-stock-photo-data-protected-with-blue-force.jpg"
                alt=""
              />
              <p>
                <span>Jenet Binla </span>
                Changed their cover picture
              </p>
            </div>

            <span>1 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://st4.depositphotos.com/13201226/30953/i/600/depositphotos_309534608-stock-photo-data-protected-with-blue-force.jpg"
                alt=""
              />
              <p>
                <span>Jenet Binla </span>
                Changed their cover picture
              </p>
            </div>

            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Freinds</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://st4.depositphotos.com/13201226/30953/i/600/depositphotos_309534608-stock-photo-data-protected-with-blue-force.jpg"
                alt=""
              />
              <div className="online"></div>
              <p>GisLain fra</p>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://st4.depositphotos.com/13201226/30953/i/600/depositphotos_309534608-stock-photo-data-protected-with-blue-force.jpg"
                alt=""
              />
              <div className="online"></div>
              <p>GisLain fra</p>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://st4.depositphotos.com/13201226/30953/i/600/depositphotos_309534608-stock-photo-data-protected-with-blue-force.jpg"
                alt=""
              />
              <div className="online"></div>
              <p>GisLain fra</p>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://st4.depositphotos.com/13201226/30953/i/600/depositphotos_309534608-stock-photo-data-protected-with-blue-force.jpg"
                alt=""
              />
              <div className="online"></div>
              <p>GisLain fra</p>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img
                src="https://st4.depositphotos.com/13201226/30953/i/600/depositphotos_309534608-stock-photo-data-protected-with-blue-force.jpg"
                alt=""
              />
              <div className="online"></div>
              <p>GisLain fra</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
