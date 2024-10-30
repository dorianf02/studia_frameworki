import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function NavBarMenu({ items }) {
    return (
        <Nav className="me-auto">
           {items
                .filter(item => item.url !== "*") 
                .map(item => (
                    <Nav.Item key={item.id}>
                        <Nav.Link href={item.url} key={item.id}>
                            {item.label}
                        </Nav.Link>
                    </Nav.Item>
                ))}
        </Nav>
    );
}

export default NavBarMenu;