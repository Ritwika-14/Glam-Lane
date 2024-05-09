import { createContext, useContext, useEffect, useState } from "react";
import { product_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems,setcartItems] = useState({});
    
    const addtoCart = (itemId) =>         //note koris
    {
        if(!cartItems[itemId])
        {
            setcartItems((prev)=>({...prev,[itemId]:1}))
        }
        else
        {
            setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart = (itemId)=> 
    {
         setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    let getTotalCartAmount = () => {
        let totalAmount=0;
        for(const item in cartItems)
            {
                if(cartItems[item]>0)
                    {
                    let itemInfo = product_list.find((product)=>product._id === item)
                    totalAmount += itemInfo.price * cartItems[item]  
                    }
            }
            return totalAmount;
    }

    const contextValue = {
        product_list,
        cartItems,
        setcartItems,
        addtoCart,
        removeFromCart,
        getTotalCartAmount
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider; 