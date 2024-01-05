import React from 'react'
import './css/LoginSignup.css'
import { Link } from 'react-router-dom'
export const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Name' />
          <input type="email" placeholder='Email Adress' />
          <input type="password" placeholder='Enter Password' />
        </div>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>I agree with the Terms and Conditions</p>
        </div>
        <button>Register</button>
        
        
      </div>
       
    </div>
  )
}
export default LoginSignup;