import React from 'react'
import './css/Login.css'
import { Link } from 'react-router-dom';
export const LoginSignup = () => {
  return (
    <div className='login'>
      <div className="login-container">
        <h1>Login</h1>
        <div className="login-fields">
          <input type="text" placeholder='Username' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Log In</button>
        <p className="loginsignup-login">
          Dont have an account?<span><Link to='/signup'>Sign Up</Link></span>
        </p>
      </div>
       
    </div>
  )
}
export default LoginSignup;