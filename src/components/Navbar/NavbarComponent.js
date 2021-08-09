import { italic } from '@uiw/react-md-editor';
import React,{Component} from 'react';
import { Navbar, Nav,NavDropdown,Container, Button } from 'react-bootstrap';

export default class NavbarComponent extends Component {
    render() {
        const cerrarSesion = ()=>{
            window.localStorage.removeItem('loggedNoteAppUser')
            window.location = '/';
        }
        const ingresar =()=>{
            window.location = '/ingreso';
        }
        const loggedUserJSON = localStorage.getItem('loggedNoteAppUser')
        return (
        <Navbar collapseOnSelect bg="primary" variant="dark">
        <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="/diplomados">Diplomados</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Nav>

            <a style={{textDecorationLine: 'none'}, {color: `rgba(255, 255, 255, .55)`}} href="https://console.firebase.google.com/u/1/" target="_blank">Drive postulaciones</a>
            {loggedUserJSON !== null && 
            <Nav.Link eventKey={2} href="#listaPostulantes">
                Postulantes
            </Nav.Link>
            } 
            {loggedUserJSON === null &&
                <Button variant="outline-light" onClick={ingresar}>Ingreso admins</Button>
            }
            {loggedUserJSON !== null &&
                <Button variant="outline-light" onClick={cerrarSesion}>Cerrar sesión</Button>
            }
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
        )
    }
}