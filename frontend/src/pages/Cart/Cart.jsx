import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext';

const Cart = () => {

  const {cartItems,product_list,removeFromcart} = useContext(StoreContext);
  
  return (
    <div>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {product_list.map((item,index)=>{
          if(cartItems[item._id]>0)
          {
            return(
              <div>
              <div className="cart-items-title cart_item_image">
                <img src={item.image} />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>{item.price*cartItems[item._id]}</p>
                <p>X</p>
              </div>
              <hr />
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default Cart