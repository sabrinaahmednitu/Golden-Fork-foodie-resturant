import React from 'react';
import {  Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css';
import './Header.css'
import logo from '../../images/logo.png';

const Header = () => {
    return (
      <div className="container">
        <Navbar
          collapseOnSelect
          expand="lg"
          className="bg-body-tertiary navbar-color"
          bg="dark"
          data-bs-theme="dark"
        >
          <Navbar.Brand href="/home" className="nav-logo">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Food</Nav.Link>
              <Nav.Link href="/pricing">Pricing</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                <i class="fa-regular fa-cart-shopping"></i>
              </Nav.Link>
              <Nav.Link href="/login" className="nav-btn">
                <button>Login</button>
              </Nav.Link>
              <Nav.Link href="/signout" className="nav-btn">
                <button>Sign Out</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
};

export default Header;