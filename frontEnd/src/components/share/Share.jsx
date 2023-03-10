import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import camera from "../../assets/camera.jpg"
import "./Share.scss"
const Share = () => {

  const {currentUser}=useContext(AuthContext)
  return (
    <div className='share'>
    
    <div className="top">
    <div className="userInfo">
    <img src={currentUser.img} alt="" className='shareImg' />
    <input type="text" placeholder="What's on your mind" />

    </div>

    <div className="shareImg">
<img src="https://i.ytimg.com/vi/rfKiTGj-zeQ/maxresdefault.jpg" alt="" />
</div>

    </div>

    <div className="bottom">
    <div className="upload">
    <label htmlFor="file"> 
    <img src={camera} alt="" className='profile' />
    </label>
    <input type="file" name="file" id="file"  style={{display:"none"}}/>
    <small>Upload your status</small>
    </div>
    <button className="ShareBtn">Share</button>
 
    
    </div>
    </div>
  )
}

export default Share