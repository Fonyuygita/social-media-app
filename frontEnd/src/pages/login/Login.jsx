
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import { useState } from "react";

import "./Login.scss";

const Login = () => {


const navigate=useNavigate();

  // login and input state

  const [inputs, setInput]=useState({
    username:"",
    password:""
  })

  // we will set our error state here
const [error, setError]=useState(null);
//  HANDLE SUBMIT HERE
const handleChange=e=>{
  setInput(prev=>({...prev, [e.target.name]: e.target.value}));
}

console.log(inputs)

//  GET API FROM BACKEND

const {login}=useContext(AuthContext);

const handleLogin= async (e)=>{

  e.preventDefault();

  try{
    await login(inputs);
    navigate("/")

  }
  catch(err){
    setError(err.response.data);
  }
  }


  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>FREE POST</h1>

          <p>
       
        The revolutionary new platform that allows you to post anything for free.
          With GitaSocialX you can share your thoughts, photos, and videos with freinds and family in an easy and secure way.No more worrying about costly subscription fees or hidden changes . just post away! Download Free post today and start connecting with the world
        
          </p>
          <span>Login and chat , have fun </span>
          <Link to='/register'>
          <button>Register</button>
          </Link>
        </div>
        {/*end of left hand side */}

        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" name="username"  onChange={handleChange} required/>

            <input type="password" placeholder="Password" name="password" onChange={handleChange}  required/>

            {error && <small>{error}</small>}
<button onClick={handleLogin}>Login</button>


          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
