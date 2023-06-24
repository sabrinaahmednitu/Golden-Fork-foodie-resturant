import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
      <div className="footer">
        <div className="upper-footer">
          <div>
            <img src="../../images/logo.png" alt="" />
          </div>
          <div className="footer-text">
            <div>
              <p>About online food</p>
              <p>Read our blog</p>
              <p>Sign up for deliver</p>
              <p>Add Your Restaurant</p>
            </div>
            <div>
              <p>Get help</p>
              <p>Read FAQ's</p>
              <p>View all cities</p>
              <p>Restaurant near me</p>
            </div>
            <div>
              <p>Privacy Policy</p>
              <p>Terms of Use</p>
              <p>Pricing</p>
            </div>
          </div>
        </div>

        <div className="lower-footer">
          <p>All right reseved by Golden-Fork @</p>
        </div>
      </div>
    );
};

export default Footer;