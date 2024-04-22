import { createContext, useContext, useEffect, useState } from "react";
import { product_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems,setcartItems] = useState({});
    
    const addtoCart = (itemId) => 
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

    useEffect(()=>{
        console.log(cartItems);
    },[cartItems])


    const contextValue = {
        product_list,
        cartItems,
        setcartItems,
        addtoCart,
        removeFromCart
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider; 