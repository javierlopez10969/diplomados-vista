import React,{Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import DiplomadosPage from './pages/Diplomados/DiplamosPage'
import NavbarComponent from './components/Navbar/NavbarComponent'

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
        <Route path="/diplomados" render = {() => {
          return (
            <div>
                <DiplomadosPage></DiplomadosPage>
            </div>
          )
        }}>
        </Route>
    </Router>    
  );
}

export default App;
