import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passRef = useRef('');

    const handleSubmit = (event) => {
      event.preventDefault();
      const name = nameRef.current.value;
      const email = emailRef.current.value;
      const password = passRef.current.value;
      console.log(name ,email, password);
    };

  const navigate = useNavigate();
  const navigateToSignup = () => {
    navigate('/home');
  };

  return (
    <div className="signup">
      <h1 className="text-center mb-3">Sign up</h1>
      <Form className="w-50 mx-auto" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="password" placeholder="Password" />
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
        Already have an account ?{' '}
        <Link to="/login" onClick={navigateToSignup}>
          Please Login
        </Link>
      </p>
    </div>
  );
};

export default Signup;
