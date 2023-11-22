import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/img/logo.png';
import style from './Navbar.module.css';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className={`${style.Navbar}`}>
    {/* <Navbar expand="lg" className={`${style.Navbar} bg-body-tertiary`}> */}
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand href="#">
          <img src={Logo} alt="logo" className={style.logo} />
        </Navbar.Brand>

        {/* Toggle button for mobile devices */}
        <Navbar.Toggle aria-controls="navbarScroll" />

        {/* Toggle button for mobile devices */}
        <Navbar.Collapse id="navbarScroll">
          <Nav
            // className="me-auto my-2 my-lg-0"
            className="ms-auto"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to="/" className={style.navLink}>Inicio</NavLink>
            <NavLink to="/nosotros" className={style.navLink}>Nosotros</NavLink>
            <NavLink to="/servicios" className={style.navLink}>Servicios</NavLink>
            <NavLink to="/contactanos" className={style.navLink}>Contactanos</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;