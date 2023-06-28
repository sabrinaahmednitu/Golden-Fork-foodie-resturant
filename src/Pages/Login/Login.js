import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const emailRef = useRef('');
  const passRef = useRef('');

  const navigate = useNavigate();
  const navigateToSignup = () => {
    navigate('/signup')
  }

  const handleSubmit = event => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    signInWithEmailAndPassword(email, password);
  }

  if (user) {
    navigate('/home');
  }

    return (
      <div className="login">
        <h2 className="text-center">Login</h2>
        <Form className="w-50 mx-auto" onSubmit={handleSubmit} >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passRef}
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
          <Link to="/signup" onClick={navigateToSignup}>
            Please signup
          </Link>{' '}
        </p>
      </div>
    );
};

export default Login;