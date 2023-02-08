import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const Header = () => {
  return (
    <div>
      <Navbar
        className="bg-gradient-to-r from-violet-500 to-fuchsia-100"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Brand href="/">
            <button className="btn btn-primary mr-2 ml-3">Gym </button>baran
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="align-items-md-center">
              <Nav.Link href="#deets" className="text-black">
                Home
              </Nav.Link>
              <Nav.Link href="#deets" className="text-black">
                Program
              </Nav.Link>
              <Nav.Link href="#deets" className="text-black">
                Blog
              </Nav.Link>
              <Nav.Link href="#deets" className="text-black">
                About Us
              </Nav.Link>
              <button className="btn btn-active btn-primary">Log in</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;