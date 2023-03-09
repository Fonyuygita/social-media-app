import  jwt  from "jsonwebtoken";
import { db } from "../db.js";
export const getPosts=(req, res)=>{

    // first get token from the user's browser
//     const token=req.cookies.accessToken;
//     if(!token) return res.status(401).json("Not logged In");
//     // if there is a token we want to verify it because tokens do expires
//  jwt.verify(token, process.env.SECRET_TOKEN, (err, usersInfo)=>{
//     if(err) return res.status(403).json("token not valid");

//     // if everything is ok, we want to get our posts from the database

   
//  })   
   

 const q=`SELECT p.*, u.id AS userId, name , profilePic FROM posts AS p JOIN users AS u ON (u.id=p.userId)`;

    db.query(q, (err, data)=>{
        if(err) return res.status(500).json(err);
        // if there is no error, we want to return our data
        return res.status(200).json(data);
    })



}