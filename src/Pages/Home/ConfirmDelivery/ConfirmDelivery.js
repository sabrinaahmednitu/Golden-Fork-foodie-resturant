import React from 'react';
import { Form } from 'react-bootstrap';
import './ConfirmDelivery.css';
import food1 from '../../../images/icons/dinner5.png'

const ConfirmDelivery = () => {
  return (
    <div className="confirmDelivery container mt-5 mb-5">
      {/* 1st div */}
      <div>
        <h4>Edit Delivery Details</h4>
        <hr />
        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="delivery type"
              className="d-input"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="location address"
              className="d-input"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Flat ,suite or floor"
              className="d-input"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Buisness Name"
              className="d-input"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Add delivery instruction"
              className="d-input"
            />
          </Form.Group>

          <button type="submit" className=" info-btn w-100">
            Save and Continue
          </button>
        </Form>
      </div>

      {/* 2nd div */}
      <div>
        <h5>From GulShan Plaza Resturant GPR </h5>
        <p>Arriving in 20-30 min</p>
        <p>107 Rd No 8</p>
        <div className="food mb-3">
          <div className="food-1">
            <img src={food1} alt="" />
            <div className="food-text">
              <div>
                <p>Butter Naan</p>
                <h5>$40</h5>
                <p className="text-muted">
                  <small>delivery free</small>
                </p>
              </div>
              <div className="food-add">
                <span>-</span>
                <div>2</div>
                <span>+</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" food ">
          <div className="food-1">
            <img src={food1} alt="" />
            <div className="food-text">
              <div>
                <p>Butter Naan</p>
                <h5>$40</h5>
                <p className="text-muted">
                  <small>delivery free</small>
                </p>
              </div>
              <div className="food-add">
                <span>-</span>
                <div>2</div>
                <span>+</span>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <p>subtotal - $320.00 </p>
        <p>Tax - $5.00 </p>
        <p>Delivery fee - $2.00 </p>
        <h5>Total - $327.00 </h5>
        <button className="PlaceOrder-btn">Place Order</button>
      </div>
    </div>
  );
};

export default ConfirmDelivery;
