import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import DiplomadosPage from './pages/DiplamosPage'
import PostulantesPage from './pages/PostulantesPage'
import PostulacionPage from './pages/PostulacionPage'
import IngresoPage from './pages/IngresoPage'
import NavbarComponent from './components/Navbar/NavbarComponent'
import Footer from './components/Footer/Footer'
import Image from 'react-bootstrap/Image'
import {Container, Col} from 'react-bootstrap';


function App() {
  return (
    <Router>
      <NavbarComponent/>
        <Route exact path="/" render = {() => {
          return (
            <div>
              
              <Container>
                <br></br>
                <Col>
                <h1>Sistema de Diplomados USACH.</h1>
                </Col>
              <Col md={{ span: 5, offset: 3 }}>
                
              
              <br></br>
                <Image src='https://www.mbausach.cl/wp-content/uploads/2021/02/usach-casa-central.jpg' />
              </Col>
            </Container>
            </div>
          )
        }}>
        </Route>
        <Route exact path="/diplomados" render = {() => {
          return (
            <div>
                <DiplomadosPage></DiplomadosPage>
            </div>
          )
        }}>
        </Route>

        <Route exact path="/postulantes" render = {() => {
          return (
            <div>
                <PostulantesPage></PostulantesPage>
            </div>
          )
        }}>
        </Route>

        <Route exact path="/postulacion" render = {() => {
          return (
            <div>
                <PostulacionPage></PostulacionPage>
            </div>
          )
        }}>
        </Route>
        <p class="my-3 py-3">  </p>
        <Route exact path="/ingreso" render = {() => {
          return (
            <div>
                <IngresoPage></IngresoPage>
            </div>
          )
        }}>
        </Route>
        <p className="my-3 py-3">  </p>
        <Footer></Footer>

    </Router>    
  );
}

export default App;
