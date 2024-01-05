import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.png'
import ig_icon from '../Assets/instagram_icon.png'
import pin_icon from '../Assets/pintester_icon.png'
import wa_icon from '../Assets/whatsapp_icon.png'
export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt=""/>
            <p>MEDICO</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
                <img src={ig_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={pin_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={wa_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2023-All Rights Reserved.</p>
        </div>
    </div>
  )
}
