import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./bootstrap.min.css"
import "./Nav.css"
function Headtwo() {
  return (
    <Navbar bg="dark" variant="dark" expand="sm" className='py-0 '>
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" >Customize</Nav.Link>
            <Nav.Link href="#link" >Auto Quotation</Nav.Link>
            <Nav.Link href="#link" >Login / Sign ups</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Headtwo;