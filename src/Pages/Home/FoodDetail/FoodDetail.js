import React from 'react';
import './FoodDetail.css';
import img from '../../../images/icons/dinner5.png';

const FoodDetail = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="foodDetailinfo">
        {/* part1 */}
        <div>
          <div className="fooddetail-text">
            <h1>Light Breakfast</h1>
            <p>
              It is advised to eat light meals as breakfast to kickstart your
              metabolism.  Lunchtime is
              when you should take a break and enjoy a hearty meal without being
              distracted by other activities.
            </p>
            <div className="price">
              <h2>$55</h2>
              <div className="quantity">
                <div className="Q-text">
                  <span> - </span>
                  <div>1</div>
                  <span> + </span>
                </div>
              </div>
            </div>
            <div className='mt-5 mb-5' >
              <button className="add-btn">
                <i class="fa-regular fa-cart-shopping"></i> Add to cart
              </button>
            </div>
            <div className="four-img">
              <img src={img} alt="" className="detail-img" />
              <img src={img} alt="" className="detail-img" />
              <img src={img} alt="" className="detail-img" />
              <img src={img} alt="" className="detail-img" />
            </div>
          </div>
        </div>

        {/* part2 */}
        <div>
          <img src={img} alt="" className="fooddetail-img" />
        </div>
      </div>
    </div>
  );
};

export default FoodDetail;
