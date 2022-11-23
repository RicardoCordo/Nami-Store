import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from "../Item/Item";

function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Nami Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#polleras">Polleras</Nav.Link>
              <Nav.Link href="#remeras">Remeras</Nav.Link>
              <NavDropdown title="Otros" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#pantalones">Pantalones</NavDropdown.Item>
                <NavDropdown.Item href="#tops">Tops</NavDropdown.Item>
                <NavDropdown.Item href="vestidos">Vestidos</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Item />
        </Container>
      </Navbar>



    </>
  );
}

export default NavBar;