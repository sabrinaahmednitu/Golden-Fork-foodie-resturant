import React from 'react';
import { Form } from 'react-bootstrap';
import './Signup.css';

const Signup = () => {
  return (
    <div className="signup">
      <h1 className="text-center">Sign up</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <button className="signup-btn" type="submit">
          Signup
        </button>
      </Form>
      <div className="or">
        <span> _______________</span>
        <span> OR</span>
        <span> _______________</span>
      </div>

      <button className="signup-btn" type="submit">
        Continue with Google
      </button>
      <button className="signup-btn" type="submit">
        Continue with github
      </button>

      <p className="text-center mt-3">
        Already have an account ? <a href="/login">Please Login</a>{' '}
      </p>
    </div>
  );
};

export default Signup;
