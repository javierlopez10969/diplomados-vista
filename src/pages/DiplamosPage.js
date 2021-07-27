import React,{Component,useState} from 'react';
import axios from 'axios';
import ControlledTabs from '../components/Diplomados/Navegacion/DiplomadosComponents'
export default class Diplomados extends Component {
    constructor(props) {
      super(props);
      this.state = {
        diplomados: [],
        docentes : []
      }
    }
    //Created de de vue
    componentDidMount() {
        //Obtener diplomados
        axios.get(process.env.REACT_APP_BASE_URL + 'diplomados').then(res => {
            var diplomados = res.data;
            this.setState({ diplomados });
            this.getDocentes();
          }).catch(error => {
            console.log(error)
         });
    }
    render() {
        return (
          <div>
              <h1 >Diplomados </h1>
              <ControlledTabs diplomados = {this.state.diplomados}> 
              </ControlledTabs>
            </div>
        )
    }
}