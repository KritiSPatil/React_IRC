import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/download-removebg-preview.png'
export const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Value</h1>
            <h1>Deals for you</h1>
            <p>Get minimum 40% off</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt=''/>
        </div>
    </div>
  )
}
