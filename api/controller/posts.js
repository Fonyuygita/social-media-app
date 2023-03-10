import jwt from "jsonwebtoken";
import moment from "moment";
import { db } from "../db.js";
export const getPosts = (req, res) => {
  //     first get token from the user's browser
  const token = req.cookies.accessToken;
  console.log(token);
  if (!token) return res.status(401).json("Not logged In");
  // if there is a token we want to verify it because tokens do expires
  jwt.verify(token, process.env.SECRET_TOKEN, (err, userInfo) => {
    if (err) return res.status(403).json("token not valid");

    // if everything is ok, we want to get our posts from the database

    const q = `SELECT p.*, u.id AS userId, name , profilePic FROM posts AS p JOIN users AS u ON (u.id=p.userId)
   LEFT JOIN relationship AS r ON (p.userId=r.followedUserId) WHERE r.followerUserId=? OR p.userId=? ORDER BY p.createdAt DESC`;

    db.query(q, [userInfo.id, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      // if there is no error, we want to return our data
      return res.status(200).json(data);
    });
  });
};

// addPost route

export const addPost = (req, res) => {
  // check for token and verify that the user is logged in
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("not logged in");

  // if there is a token, we wish to verify if it is valid
  jwt.verify(token, process.env.SECRET_TOKEN, (err, userInfo) => {
    if (err) return res.status(403).json("token is not valid");

    // if token is valid, then we can insert something into the database

    const q = "INSERT INTO posts(des, img, userId, createdAt) VALUES(?)";

    // here we run our query
    
    const values=[req.body.des, req.body.img, userInfo.id, moment(Date.now()).format("YY-MM-DD HH:mm:ss") ]
console.log(moment(Date.now()).format("YYY-MM-DD HH:mm:ss"));
    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);

      // if everything is ok,

      return res.status(200).json("post has been created");
    });
  });


};
