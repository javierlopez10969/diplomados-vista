import React,{Component} from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import {Nav} from 'react-bootstrap'


export default class Diplomados extends Component {
        /*
    CREATE TABLE "diplomado" (
    "id" serial,
    "titulo" varchar(100),
    "introduccion" varchar(5000),
    "objetivo" varchar(5000),
    "descripcion" varchar(5000),
    "horas" int,
    "cursos" int,
    "imagen" varchar(1000),
    PRIMARY KEY ("id")
    );
    */
    state = {
        diplomados: [],
        urlApi: 'http://localhost:3000/'

    }
    //Createde de vue
    componentDidMount() {
        //Obtener diplomados
        const url = 'http://localhost:3000/diplomados';
        axios.get(url).then(res => {
            const diplomados = res.data;
            this.setState({ diplomados });
          }).catch(error => {
            console.log(error)
         });
    }
    render() {
        return (
            <div>

              <h1>Diplomados </h1>
              <Nav fill variant="tabs">

                { this.state.diplomados.map(diplomado => 
                <div>

                <Nav.Item>
                    <Nav.Link>{diplomado.titulo}</Nav.Link>
                </Nav.Item>
                
                </div>
                        
                )}
                </Nav>
              { this.state.diplomados.map(diplomado => 
              <li>
                   <ReactMarkdown 
                    children={diplomado.objetivo}
                    />
                
              </li>)}
            </div>
        )

    }
}