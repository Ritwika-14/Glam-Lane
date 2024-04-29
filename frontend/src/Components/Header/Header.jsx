import React from 'react'
import './Header.css'
import header_img from './header_img.png'

const Header = () => {
  return (
    <div className="header">
      <img src={header_img} className='header-image'/>
        <div className="header-contents">
            <h2>Discover Your Beauty Heaven</h2>
            <p>Shop now and discover the secret to radiant skin. With our range of skincare products, you can unlock the confidence that comes with a flawless complexion!</p>
            <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header