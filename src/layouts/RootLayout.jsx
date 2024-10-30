import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavBarMenu from '../components/NavBarMenu';
import Footer from '../components/Footer';


function RootLayout({children, items}) {
    return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Frameworki frontedowe</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        {items
                                .filter(item => item.urlPattern !== "*")
                                .map(item => (
                                    <Nav.Item key={item.id}>
                                        <Nav.Link as={Link} to={item.urlPattern}>
                                            {item.label}
                                        </Nav.Link>
                                    </Nav.Item>
                                ))}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container>{children}</Container>
            < Footer />
    </>
    );
}

export default RootLayout;