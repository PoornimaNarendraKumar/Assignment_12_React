import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-lg rounded-bottom sticky-top">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold text-warning">
          🚀 My Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about" className="nav-item-custom">About Me</Nav.Link>
            <Nav.Link href="#projects" className="nav-item-custom">Projects</Nav.Link>
            <Nav.Link href="#skills" className="nav-item-custom">Skills</Nav.Link>
            <Nav.Link href="#contact" className="nav-item-custom">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
