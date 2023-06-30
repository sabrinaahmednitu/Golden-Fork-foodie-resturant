import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleRegister = (event) => {
    event.preventDefault();
     const email = emailRef.current.value;
     const password = passwordRef.current.value;
    console.log(email, password);
  }


  return (
    <div className="login">
      <h2 className="text-center">Login</h2>
      <Form className="w-50 mx-auto" onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
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
      <p className="text-center">
        If you don't have any account ?{' '}
        <Link to="/signup" className="text-decoration-none">
          Please signup
        </Link>
      </p>
    </div>
  );
};

export default Login;