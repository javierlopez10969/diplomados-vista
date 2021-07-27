import React,{Component,useState} from 'react';
import axios from 'axios';
import {Nav,Tab, Tabs,Row,Col,Container} from 'react-bootstrap'

class FirstPane extends Component {
  constructor(props) {super(props);}
  render() {
    return (
      <Container fluid>
      {this.props.diplomado.introduccion != null &&
        <div><h1> Introducción </h1>
        <p className="parrafo color" >{this.props.diplomado.introduccion}</p></div>}
      {this.props.diplomado.objetivo != null &&
        <div><h1> Objetivo </h1>
            <p className="parrafo color" >{this.props.diplomado.objetivo}</p></div>}
      {this.props.diplomado.descripcion != null &&
        <div><h1> Descripción </h1>
        <p className="parrafo color" >{this.props.diplomado.descripcion}</p></div>}
    </Container>
    
    )
  }
}
class Docentes extends Component {
  constructor(props) {
    super(props);
    this.state ={
      docentes: []
    }
  }
  componentDidMount(){
    axios.get(process.env.REACT_APP_BASE_URL + 'docentes/diplomado/' + this.props.id)
    .then(res => {
      var docentes = res.data;
      this.setState ({
        docentes
      })}).catch(error => {
      console.log(error)
    });
  }
  render() {
    return (
      <div>
        <h3>El cuerpo docente se compone de auditores e ingenieros de alto nivel académico o profesionales de reconocido prestigio y experiencia laboral.</h3> 
        {this.state.docentes.map(docente => 
      <div><h4>  {docente.nombre} </h4></div>)}</div>  
    )
  }
}

function ControlledTabs(props) {
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
                      <Nav.Link eventKey="second">Plan de Estudios</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Cuerpo Docente</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="four">Aranceles</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="five">Admisión</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="six">Contacto</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>                
                <Col  sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                    <FirstPane diplomado = {diplomado}></FirstPane>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Docentes id = {diplomado.id}></Docentes>
                    </Tab.Pane>
                    <Tab.Pane eventKey="four">
                    </Tab.Pane>
                    <Tab.Pane eventKey="five">
                    </Tab.Pane>
                    <Tab.Pane eventKey="six">
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

export default ControlledTabs;