import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p>Delivery Information</p>
        <div className="multifields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name'/>
        </div>
        <input type="email" placeholder='Email-address'/>
        <input type="text" placeholder='Street'/>
        <div className="multifields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State'/>
        </div>
        <div className="multifields">
          <input type="text" placeholder='Zipcode' />
          <input type="text" placeholder='Country'/>
        </div>
        <input type='number' placeholder='phone no.' />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div className="cart-total-details">
            <p>SubTotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${4}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <p>${getTotalCartAmount()+4}</p>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder