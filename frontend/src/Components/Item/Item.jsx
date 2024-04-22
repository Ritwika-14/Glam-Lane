import React, { useContext } from 'react'
import './Item.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';

const Item = ({id,name,price,description,image}) => {

  // const [itemCount,setitemCount] = useState(0);
  const {cartItems,addtoCart,removeFromCart} = useContext(StoreContext);


  return (
    <div className='item'>
        <div className="item-container">
            <img  className="item-container-image" src={image} alt={name} />
            {!cartItems[id]
              ?<img src={assets.add_icon_white} onClick={()=>addtoCart(id)} className='add-icon'/>
              :<div className='counter'>
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} />
                <p>{cartItems[id]}</p>
                <img onClick={()=>addtoCart(id)} src={assets.add_icon_green} />
              </div>
            }
        </div>
        <div className="item-info">
            <div className="rating">
                <p>{name}</p>
                <img src={assets.rating_starts}  alt="Rating" />
            </div>
            <p className="item-description">{description}</p>
            <p className="item-price">${price}</p>
        </div>
    </div>
  )
}

export default Item