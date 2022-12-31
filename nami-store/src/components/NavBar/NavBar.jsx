import CartWidget from "../CartWidget/CartWidget";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const NavBar = () => {
  return (
    <>
      <Navbar className="Navbar" collapseOnSelect expand="lg" >
        <Container className="Container">
          <Link className='btn' to='/' >Nami Store</Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink className='btn ' to='/category/polleras'>Polleras</NavLink>
              <NavLink className='btn ' to='/category/remeras' >Remeras</NavLink>
              <NavLink className='btn ' to='/category/pantalones'>Pantalones</NavLink>
              <NavLink className='btn ' to='/category/tops'>Tops</NavLink>
              <NavLink className='btn ' to='/category/vestidos' >Vestidos</NavLink>
            </Nav>
          </Navbar.Collapse>
          <Link to='/cart'>
            <CartWidget />
          </Link>
        </Container>
      </Navbar>



    </>
  );
}

export default NavBar;