import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import DiplomadosPage from './pages/DiplamosPage'
import PostulantesPage from './pages/PostulantesPage'
import PostulacionPage from './pages/PostulacionPage'
import NavbarComponent from './components/Navbar/NavbarComponent'
import Footer from './components/Footer/Footer';


function App() {
  return (
    <Router>
      <NavbarComponent/>
        <Route exact path="/" render = {() => {
          return (
            <div>
                <h1>Home sweet home</h1>
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
        <Footer></Footer>

    </Router>    
  );
}

export default App;
