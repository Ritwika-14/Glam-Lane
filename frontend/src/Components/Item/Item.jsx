import React from 'react'
import './Item.css'
import { assets } from '../../assets/assets'

const Item = ({id,name,price,description,image}) => {
  return (
    <div className='item'>
        <div className="item-container">
            <img src={image} className='item-image' alt={name} />
        </div>
        <div className="item-info">
            <div className="rating">
                <p>{name}</p>
                <img src={assets.rating_starts}  alt="Rating" />
            </div>
            <p className="item-description">{description}</p>
            <p className="item-price">{price}</p>
        </div>
    </div>
  )
}

export default Item