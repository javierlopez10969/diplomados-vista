import React,{Component,useState} from 'react';
import axios from 'axios';
import {Nav,Tab, Tabs,Row,Col,Container} from 'react-bootstrap'
import './DiplomadosPage.css';


function ControlledTabs(props) {
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
  const [key, setKey] = useState('1');

  return (
    <div fluid>
                
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
        {props.diplomados.map(diplomado =>     
          <Tab eventKey={diplomado.id} title={diplomado.titulo}>
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                    <Nav.Link eventKey="first">Objetivos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Plan de Estudio</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>

                
                <Col  sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                    <Container fluid>
                    {
                          diplomado.introduccion != null &&
                          <div>
                              <h1> Introducción </h1>
                              <p className="parrafo color" >{diplomado.introduccion}</p>

                             </div>
                          
                        }
                        {
                          diplomado.objetivo != null &&
                          <div>
                              <h1> Objetivo </h1>
                              <p className="parrafo color" >{diplomado.objetivo}</p>

                             </div>
                          
                        }
                        {
                          diplomado.descripcion != null &&
                          <div>
                              <h1> Descripción </h1>
                              <p className="parrafo color" >{diplomado.descripcion}</p>

                             </div>
                          
                        }
                         </Container>

                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      asgdasdg 2
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>

             </Tab>
          )}
        </Tabs>
    </div>
  
  );
}

export default class Diplomados extends Component {
    state = {
        diplomados: [],
        urlApi: 'http://localhost:3000/'
    }
    //Created de de vue
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
              <h1 >Diplomados </h1>
              <ControlledTabs diplomados = {this.state.diplomados}> </ControlledTabs>
            </div>
        )

    }
}

