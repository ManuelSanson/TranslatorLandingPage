import { Container, Navbar, Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
    const { t } = useTranslation();
    return (
        <Navbar className="navbar" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/' className="navLink"> {t('Home')}  </Nav.Link>
                        <Nav.Link as={Link} to='aboutme' className="navLink"> {t('About me')} </Nav.Link>
                        <Nav.Link as={Link} to='services' className="navLink"> {t('Services')} </Nav.Link>
                        <Nav.Link as={Link} to='contact' className="navLink"> {t('Contact')} </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;