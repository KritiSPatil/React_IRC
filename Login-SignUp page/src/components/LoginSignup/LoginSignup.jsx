import React, { useState } from 'react'
import './LoginSignup.css'
import user_icon from '../Assets/user.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/pass.png'
import cpassword_icon from '../Assets/cpass.png'

export const LoginSignup = () => {
    const[action,setAction]=useState("Login");
  return (
    
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            
            {action==="Login"?<div className="input">
                <img src={user_icon} alt="" />
                <input type="Email" placeholder="Username"/>
            </div>:
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder="Email Id"/>
            </div>}
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder="Password"/>
            </div>
            {action==="Login"?<div></div>:
            <div className="input">
                <img src={cpassword_icon} alt="" />
                <input type="password" placeholder='Confirm Password'/>
            </div>}
            
        </div>
        {action==="Sign Up"?<div></div>:
    <div className="forgot-password">Forgot Password?<span>Click Here</span></div>}
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"}onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>

        </div>
        </div>
  )
}
export default LoginSignup