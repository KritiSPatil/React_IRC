import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
export const ProductDisplay = (props) => {
    const{product}=props;
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <divproductdisplay-img>
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </divproductdisplay-img>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">
                ₹{product.old_price}
                </div>
                <div className="productdisplay-right-price-new">
                ₹{product.new_price}
                </div>
            </div>
            <div className="productdisplay-right-descrption">
                
            </div>
            <div className="productdisplay-right-size">
                <h1>
                    Select Size
                </h1>
                <div className="productdisplay-right-sizes">
                    <div>100g</div>
                    <div>250g</div>
                    <div>500g</div>
                    <div>1kg</div>
                    <div>2kg</div>
                </div>
            </div>
            <button>Add to Cart</button>
            <p className='productdisplay-right-category'><span>Category :</span>Health & Wellness, Self Care</p>
            <p className='productdisplay-right-category'><span>Tags :</span>Hygiene</p>
        </div>
    </div>
  )
}
