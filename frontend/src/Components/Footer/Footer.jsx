import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div>
      <div className="footer" id="contact">
        <div className="footer-content">
          <div className="footercontent-left">
            <img src={assets.logo} />
            <p></p>
            <div className="footer-icons">
              <img src={assets.facebook_icon} />
              <img src={assets.twitter_icon} />
              <img src={assets.linkedin_icon} />
            </div>
          </div>
          <div className="footercontent-center">
            <h2>COMPANY</h2>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Private Policy</li>
            </ul>
          </div>
          <div className="footercontent-right">
            <h2>Get in Touch</h2>
            <ul>
              <li>+1-0123456789</li>
              <li>contact@glamlane.in</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="footer-copyright">
          Copyright 2024 Glamelane.com - All rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
