import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./bootstrap.min.css"
import "./Nav.css"

function Heading() {
  return (
    
    <Navbar bg="success" expand="lg">
        
      <Container>
        <Navbar.Brand href="#home">logo</Navbar.Brand>
        
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        
            
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="text-color"><h5>Home</h5> </Nav.Link>
            <Nav.Link href="#link" className="text-color"><h5>Service</h5></Nav.Link>
            <Nav.Link href="#link" className="text-color"><h5>Blog</h5> </Nav.Link>
            <Nav.Link href="#link" className="text-color"><h5>Contact Us</h5></Nav.Link>
            <Nav.Link href="shop" className="text-color"> <h5>Shop</h5> </Nav.Link>
            <Nav.Link href="#link" className="text-color"> <h5>Customer Review</h5> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Heading;