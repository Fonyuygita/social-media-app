import React from 'react'
import { Link } from 'react-router-dom'
import './Register.scss'

const Register = () => {
  return (
    <div className="register">
    <div className="card">
      <div className="left">
        <h1>FREE POST</h1>

        <p>
     
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem deserunt sunt at?
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
       deleniti totam adipisci.
 
        </p>
        <span> If no Account, then register</span>
        <Link to='/login'>
        <button>Login</button>
        </Link>

      </div>
      {/*end of leftt hand side */}

      <div className="right">
        <h1>Register</h1>
        <form>
          <input type="text" placeholder="Username" />

          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="text" placeholder="Name" />
<Link to="/register">
<button>Register</button>

</Link>

        </form>
      </div>
    </div>
  </div>
  )
}

export default Register