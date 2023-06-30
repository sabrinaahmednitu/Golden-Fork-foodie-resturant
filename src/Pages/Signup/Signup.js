import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Signup.css'

const Signup = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit=(event)=>{
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(name, email, password);
  }
  return (
    <div className="signup">
      <h1 className="text-center mb-3">Sign up</h1>
      <Form className="w-50 mx-auto" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control ref={nameRef} type="text" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        {/* {error} */}
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
        Already have an account ? <Link to="/login" className='text-decoration-none' >Please Login</Link>
      </p>
    </div>
  );
};

export default Signup;
