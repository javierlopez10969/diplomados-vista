import React,{Component} from 'react';
import axios from 'axios';
import ListaPostulantes from '../components/Postulante/DatosPostulante';



export default class PostulantesPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        postulantes: []
      }
    }
    //Created de de vue
    componentDidMount() {
        //Obtener diplomados
        axios.get(process.env.REACT_APP_BASE_URL + 'postulantes').then(res => {
            var postulantes = res.data;
            this.setState({ postulantes });
          }).catch(error => {
            console.log(error)
         });
    }
    render() {
        return (
          <div>
              <h1 >Postulantes </h1>
                Los postulantes son : 
                <ListaPostulantes postulantes = {this.state.postulantes}> </ListaPostulantes> 
            </div>
        )
    }
}