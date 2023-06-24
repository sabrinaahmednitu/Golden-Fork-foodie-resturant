import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div
    >
      <div className="banner">
        <div className="banner-text">
          <h2>Best Food Waiting For Your Belly</h2>
          <div class="search-box">
            <button>Search</button>
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
