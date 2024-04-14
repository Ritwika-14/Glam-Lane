import React from 'react'
import './Menu.css'
import { category_list } from '../../assets/assets'

const Menu = ({category , setCategory}) => {
  return (
    <div className='explore-menu'>
        <h2>Range of Products</h2>
        <h3>~Discover your perfect look with just a tap. Your personalized makeup journey starts here.</h3>
        <div className="explore-menu-list">
            {category_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.category_name?"All":item.category_name) } key={index} className="explore-menu-list-name">
                        <img className={category===item.category_name?"active":"explore-menu-list-image"} src={item.category_image} />
                        <p>{item.category_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default Menu