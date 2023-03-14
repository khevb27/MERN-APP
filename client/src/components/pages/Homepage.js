import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../../index.css'; // Import the CSS file for styling

function HomePage() {
  return (
    <>
      <header className="text-center"> {/* Center the header */}
        <h1>Welcome to My Trips App!</h1>
      </header>
      <Navbar bg="dark" expand="lg" className="justify-content-center"> {/* Make the navbar inline */}
        <Container>
          <Navbar.Brand href="#">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-nav">
              <Nav.Link href="#">Login</Nav.Link>
              <Nav.Link href="#">Sign Up</Nav.Link>
              <Nav.Link href="#">My Trips</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default HomePage;
