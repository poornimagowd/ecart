import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { useSelector } from 'react-redux';

function Header() {
 const state = useSelector(state => state.handleCart)
 console.log('state', state)
  return (
    <Navbar bg="light" className = "navbar-light bg-light py-3 shadow-sm"expand="lg">
      <Container>
       {/* <Image src="./assets/logo.jpg"  rounded height={50} width={120}/> */}
       <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 nav-links"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/product" className="nav-link">Product</NavLink>
            <NavLink to="/about" className="nav-link">About</NavLink>
          </Nav>
        </Navbar.Collapse>
        <div className="buttons">
          <a href="" className="btn btn-outline-dark ms-2">
           <i className="fa fa-shopping-cart me-1"></i>Cart ({state})
          </a>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;