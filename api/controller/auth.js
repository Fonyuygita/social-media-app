import { db } from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// now let us create our login , logout and register functionality in our program

export const register = (req, res) => {
  //  CHECK IF USER EXIST FROM DATABASE
  const q = "SELECT * FROM users WHERE username=?";
  // run query
  db.query(q, [req.body.username], (err, data) => {
    // 500=>server site errors
    if (err) return res.status(500).json(err);

    // if user already exist
    if (data.length) return res.status(409).json("user already exist");

    //  IF THERE IS NO USER WE WANT CREATE A NEW USER,
    // hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    // now we add our user inside our db with hashed password
    const q = "INSERT INTO users (username, email, password, name) VALUE(?)";
    const values = [req.body.username, req.body.email, hashedPassword, req.body.name];

    db.query(q, [values], (err, data) => {
      if (err)
        return res.status(500).json({
          err: true,
          msg: "not found",
        });

      return res.status(200).json({
        message: `user created with hash password ${hashedPassword}`,
      });
    });
  });
};

//  LOGIN FUNCTIONALITY TO BE USE IN OUR ROUTES

export const login = (req, res) => {
  //  SELECT ALL USERS
  const q = "SELECT * FROM users WHERE username=?";
  // run our query
  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    // check if there is data but not your match
    if (data.length === 0) return res.status(404).json("user not found");
    // compare the 2 password
    const checkPassword = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!checkPassword)
      return res.status(400).json("Wrong password or username");

    // convert user id to token using jwt

    const token = jwt.sign({ id: data[0].id }, process.env.SECRET_TOKEN);

    //    finally we can send our user info in form of a cookie
    const { password, ...others } = data[0];
    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  });
};

//  SET UP LOGOUT ROUTES

export const logout = (req, res) => {
  res.json("logout route being setup");
};
