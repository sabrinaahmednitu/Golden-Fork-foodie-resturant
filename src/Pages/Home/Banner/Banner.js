import React from 'react';
import './Banner.css';
import banner from '../../../images/bannerbackground.png'

const Banner = () => {
    return (
      <div className="container">
        <div class="banner">
          <img src={banner} alt="" />
        </div>
      </div>
    );
};

export default Banner;