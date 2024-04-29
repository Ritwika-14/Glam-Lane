import React from 'react'
import "./AppDownload.css"
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div className='App-Download'>
        <p>For better Experience Download <br /> Glam-Lane App </p>
        <div className="app-download">
            <img src={assets.play_store}  />
            <img src={assets.app_store}  />
        </div>
    </div>
  )
}

export default AppDownload