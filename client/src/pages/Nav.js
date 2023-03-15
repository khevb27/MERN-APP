import Nav from 'react-bootstrap/Nav';
import "../App.css"
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function NavBar() {
return (
    <Navbar bg="success" expand="lg" className="justify-content-center"> {/* Make the navbar inline */}
    <Container>
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav">
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/signup">Sign Up</Nav.Link>
          <Nav.Link href="#">My Trips</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    );
}

export default NavBar;