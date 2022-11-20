
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


import "./Login.scss";

const Login = () => {

const {login}=useContext(AuthContext);

const handleLogin=()=>{
  login();
}

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>FREE POST</h1>

          <p>
       
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem deserunt sunt at?
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
         deleniti totam adipisci.
   
          </p>
          <span>Login and chat , have fun </span>
          <Link to='/register'>
          <button>Register</button>
          </Link>
        </div>
        {/*end of leftt hand side */}

        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />

            <input type="password" placeholder="Password" />

<button onClick={handleLogin}>Login</button>


          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
