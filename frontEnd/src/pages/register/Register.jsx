import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.scss";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [inputs, setInput] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });
const navigate=useNavigate();
  // error state here

  const [error, setError]=useState(false);

  const handleChange = (e) => {
    setInput(prev=>({...prev, [e.target.name]: e.target.value}))
  };

  console.log(inputs);


  // handle click to send data to our database


  const handleClick= async e=>{

    e.preventDefault();

    try{

    await axios.post("http://localhost:5000/api/auth/register" ,inputs);
      navigate("/login");

    }

    catch(err){
      console.log(err);
      setError(err.response.data);

    }
  }

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>FREE POST</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
            deserunt sunt at? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Dignissimos deleniti totam adipisci.
          </p>
          <span> If no Account, then register</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        {/*end of leftt hand side */}

        <div className="right">
          <h1>Register</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />

            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
            />
             {error && <p className="err">{error}</p>}
            <Link to="/register">
              <button onClick={handleClick}>Register</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
