import React from 'react';
import { Form } from 'react-bootstrap';
import './Login.css'

const Login = () => {
    return (
      <div className="login">
        <h2 className='text-center' >Login</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <button className="login-btn" type="submit">
            Login
          </button>
        </Form>
        <div className="or">
          <span> _______________</span>
          <span> OR</span>
          <span> _______________</span>
        </div>
        <p className='text-center' >If you don't have any account ? <a href="/signup">Please signup</a> </p>
      </div>
    );
};

export default Login;