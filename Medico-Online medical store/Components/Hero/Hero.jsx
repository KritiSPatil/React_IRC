import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/Termination_clinic_in_Polokwane_-removebg-preview.png'
export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>Great Offers</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>Buy</p>
                </div>
                <p>Medicines</p>
                <p>& Essentials</p>
            </div>
            <div className="hero-latest-btn">
                <div>
                    Shop Now
                </div>
                <img src={arrow_icon} alt=''/>
            </div>
        </div>    
        <div className="hero-right">
            <img src={hero_image} alt=''/>
        </div>

    </div>
  )
}
