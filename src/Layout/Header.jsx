import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
       <Navbar.Brand as={Link} to="/" className="fw-bold d-flex align-items-center">
          <img
            src="/logo.png" 
            alt="GitHub Logo"
            width="30"
            height="30"
            className="d-inline-block align-top me-2"
          />
          GitHub
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
