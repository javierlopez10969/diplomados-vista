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
            <Nav.Link href="/postulacion">Postulación</Nav.Link>
            </Nav>
            
            <Nav>


            {loggedUserJSON !== null &&

                <Button  style={{textDecorationLine: 'none'}  ,{color: `rgba(255, 255, 255, .55)`}} href="https://console.firebase.google.com/u/1/" target="_blank">Drive postulaciones</Button>

            }

            {loggedUserJSON !== null && 
            <Nav.Link eventKey={2} href="/postulantes">
                Postulantes
            </Nav.Link>
            } 
            {loggedUserJSON === null &&
                <Button name="iniciar sesion" variant="outline-light" onClick={ingresar}>Ingreso admins</Button>
            }
            {loggedUserJSON !== null &&

                <Button name="cerrar sesion"  variant="outline-light" onClick={cerrarSesion}>Cerrar sesión</Button>
                
            }
           

            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
        )
    }
}