import React,{Component} from 'react';
import axios from 'axios';

class Diplomados extends Component {
    constructor(props) {
      super(props);
      this.state ={
          diplomados: []
        }}
    componentDidMount(){
      axios.get(process.env.REACT_APP_BASE_URL + 'diplomados/postulante/' + this.props.id)
      .then(res => {
        var diplomados = res.data;
        this.setState ({diplomados})}
        ).catch(error => {console.log(error)});
    }
    render() {
      return (<div>{this.state.diplomados.map(diplomado => 
        <div><li>{diplomado.titulo} </li></div>)}</div>)
    }
}


export default class ListaPostulantes extends Component{
    render (){
        return( 
            <table class="table table-striped">
            <thead class="thead-dark">
                <tr>
                    <th>Nombre</th>                                                            
                    <th>Correo</th>
                    <th>Numero de telefono</th>                               
                    <th>Postulación </th>   
                    <th>Ver detalle</th>  
                </tr>
            </thead>
            <tbody>  
                
                {this.props.postulantes.map(postulante=> 
                    <tr>
                            <td>{ postulante.nombre }</td> 
                            <td>{ postulante.correo }</td> 
                            <td>{ postulante.num_telefono }</td>    
                            <td> <Diplomados id = {postulante.id}></Diplomados> </td>                           
                    </tr> 
                )}                           
            </tbody>
            </table>
        )
    }
}