import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./post.scss";

import { FiMoreHorizontal } from "react-icons/fi";
import {
  MdFavorite,
  MdFavoriteBorder,
  MdOutlineAddComment,
  MdOutlineShare,
} from "react-icons/md";
import Comment from "../comments/Comment";

const Post = ({ post }) => {

  // control comment
  const [commentOpen, setCommentOpen]=useState(false);
  const [liked, setLiked] = useState(false);
  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.img} alt="" />

            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "NONE", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <FiMoreHorizontal />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {liked ? (
              <MdFavoriteBorder
                onClick={() => {
                  setLiked(!liked);
                }}
              />
            ) : (
              <MdFavorite
                color="red"
                onClick={() => {
                  setLiked(!liked);
                }}
              />
            )}
            <small>23 Liked</small>
          </div>
          <div className="item" onClick={()=>{setCommentOpen(!commentOpen)}} >
            <MdOutlineAddComment />
            <small>34 comment</small>
          </div>

          <div className="item">
            <MdOutlineShare />
            <small>23 send</small>
          </div>
        </div>
          { commentOpen && <Comment />}
      </div>
    </div>
  );
};

export default Post;
