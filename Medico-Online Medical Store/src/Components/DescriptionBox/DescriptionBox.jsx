import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="despcriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>
            <div className="descriptionbox-nav-box fade">
                Reviews (122)
            </div>
        </div>  
            <div className="descriptionbox-description">
                <p>The online medical store is a virtual haven, seamlessly connecting users to a comprehensive array of pharmaceutical products and healthcare essentials, offering the convenience of effortless browsing, secure transactions, and doorstep delivery, all within a user-friendly digital interface.                   
                </p>
                <p>In this virtual pharmacy, customers can easily navigate through a well-organized platform featuring a diverse range of medical supplies, prescription medications, and wellness products, with detailed product descriptions and user reviews providing valuable insights. The online medical store ensures a secure and confidential shopping experience, allowing users to upload prescriptions, consult with licensed pharmacists, and receive personalized healthcare advice. With streamlined checkout processes and reliable delivery services, it stands as a reliable and accessible resource for individuals seeking health-related products and services from the comfort of their homes.</p>
            </div>
    </div>
  )
}
