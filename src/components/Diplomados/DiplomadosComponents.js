import React,{Component,useState} from 'react';
import axios from 'axios';
import {Nav,Tab, Tabs,Row,Col,Container} from 'react-bootstrap'
import './Diplomados.css'

//En este codigo se ponen los distitnos componentes necesarios para la
// pagina de diplomados

//Primer panel de navegación
class FirstPane extends Component {
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

//Segundo panel de navegación
class SecondPane extends Component {
  constructor(props) {
    super(props);
    this.state ={
      diplomado: []
    }
  }
  render() {
    return (
      <div>
        <div>
          <h2> Número de cursos y duración</h2>
          <div class="tabular"> 
            <li> El diplomado tiene una duración total de
            {this.props.diplomado.horas} y está estructurado en {this.props.diplomado.cursos}</li> 
            <li>Horario: Lunes a Viernes de 19:00 a 22:00 horas</li>
            <li>Modalidad: On-Line</li>
          </div> 
          <h2> Cursos del programa</h2>
          <Cursos id= {this.props.id}></Cursos>
          <h2> Requisitos de aprobación</h2>
          <div class="tabular">
            <li>Aprobar todos los cursos del diplomado ({this.props.diplomado.cursos} cursos).</li>
            <li>Asistencia de un 75% a las horas de clase de cada curso del diplomado.</li>
            <li>Nota mínima 4,0 (en escala de 1,0 a 7,0) para cada curso del diplomado.</li>
          </div>
        </div>
      </div>
    )
  }
}
function Cursos(props) {
  const id = props.id;
  if (id ===1){
    return <ol class="tabular">
      <li>Fundamentos de ciencia de datos.</li>
      <li>Programación en la ciencia de datos.</li>
      <li>Big data.</li>
      <li>Análisis exploratorio de datos.</li>
      <li>Modelamiento basado en datos.</li>
      <li>Proyecto de ciencia de datos aplicados.</li>
      </ol>;
  }if (id === 2){
    return <ol class="tabular">
      <li>Fundamentos ciberseguridad y seguridad de la información</li>
      <li>Gestión y operación de la ciberseguridad</li>
      <li>Operación de la ciberseguridad y TI</li>
      <li>Seguridad y protección tecnológica</li>
      <li>Protección aplicativa, hacking ético y forense</li>
      <li>Tecnologías relacionadas</li>
      <li>Aspecto legales en ciberseguridad</li>
      </ol>;
  }if (id ===3){
    return <ol class="tabular">
      <li>Fundamentos de Gestión de Riesgos.</li>
      <li>Gestión del Riesgo Operacional.</li>
      <li>Riesgos TIC.</li>
      <li>Taller de aplicación de Evaluación de Riesgo: aplicación en un caso práctico.</li>
      <li>Riesgo Operacional relacionado con los Servicios Externalizados.</li>
      <li>Gestión de la Continuidad del Negocio.</li>
      <li>DRP (Disaster Recovery Planning).</li>
      <li>Taller de aplicación de un Plan de Recuperación ante Desastres (DRP).</li>
      <li>Tópicos Avanzados</li>
      </ol>;
  }if (id === 4){
    return <ol class="tabular">
      <li>Auditoría Computacional y Seguridad de Sistemas I</li>
      <li>Auditoría Computacional y Seguridad de Sistemas II</li>
      <li>Desarrollo de un programa de seguridad en ambientes y sistemas computacionales de la organización.</li>
      <li>Controles a sistemas en desarrollo y producción</li>
      <li>Redes de Computadores</li>
      <li>Seguridad en Redes I</li>
      <li>Seguridad en Redes II</li>
      <li>Metodologías para controlar los riesgos en la utilización de TI (COSO, ITIL y COBIT).</li>
      <li>Seguridad en Bases de Datos</li>
      <li>Delitos informáticos</li>
      </ol>;
  }if (id === 5){
    return <ol class="tabular">
      <li>Redes de computadores</li>
      <li>Seguridad en redes de computadores I</li>
      <li>Seguridad en redes de computadores II</li>
      <li>Criptografía</li>
      <li>Laboratorio de encriptación y firma digital</li>
      <li>Documento electrónico y firma digital</li>
      <li>Derechos de autor sobre el software, bases de datos y otras tecnologías</li>
      <li>Hacking ético</li>
      <li>Elementos básicos de peritaje informático I</li>
      <li>Elementos básicos de peritaje informático II</li>
      <li>Taller de peritaje informático</li>
      <li>Delitos informáticos</li>
      <li>Imágenes digitales: herramientas de la criminalística</li>
      <li>Protección de datos personales</li>
      <li>Informática forense</li>
      <li>Seguridad en bases de datos</li>
      </ol>;
  }

  return <div> </div>;
}

//Tercer panel de navegación
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
        <h5>El cuerpo docente se compone de auditores e ingenieros de alto
           nivel académico o profesionales de reconocido prestigio y experiencia
            laboral.</h5> 
        {this.state.docentes.map(docente => 
        <div><h4>  {(docente.nombre === "Alcides Quispes")
                  ? <div> </div>
                  : <div> {docente.nombre}  </div> } </h4> 
      <Titulos id = {docente.id}></Titulos></div>)}</div>  
    )
  }
}

class Titulos extends Component {
  constructor(props) {
    super(props);this.state ={titulos: []}}
  componentDidMount(){
    axios.get(process.env.REACT_APP_BASE_URL + 'titulos/docente/' + this.props.id)
    .then(res => {
      var titulos = res.data;
      this.setState ({titulos})}
      ).catch(error => {console.log(error)});
  }
  render() {
    return (<div>{this.state.titulos.map(titulo => 
      <div class="tabular"><li>{titulo.nombre} </li></div>)}</div>)
  }
}

//Aranceles
//Cuarto panel de navegación
class Aranceles extends Component {
  render() {
    return (
      <div>
        <h1>Aranceles</h1>
        <hr></hr>
        <div class="tabular">
          <li>El valor total del diplomado asciende a ${this.props.arancel.toLocaleString()} (valor año 2021, 1° Semestre). </li>
          <li>Derecho de inscripción por un valor de $63.000.</li>
          <li>Este diplomado no está adscrito a código SENCE.</li>
          <li>Este diplomado no está adscrito a convenio marco.</li>
        </div>
        <h1> Descuentos </h1> 
        <hr></hr>
        <div class="tabular"> 
          Descuentos para aquellas personas que vienen con financiamiento
          propio (no son financiados desde una empresa/organización).
          <li>Pago al contado (25%)</li>
          <li>Ex alumno pregrado USACH (15%)</li>
          <li>Ex alumno diplomados DIINF (15%)</li>
          <li>Ex alumno diplomados USACH (10%)</li>
          <li>Socios activos AGI (15%)</li>
          <li>Funcionario público (10%)</li>
            IMPORTANTE
          <li>Los descuentos no son acumulables.</li>
          <li>Los descuentos son aplicables solamente para
            pagos realizados hasta antes del inicio de clases de los diplomados.</li>
          <li> Los descuentos no aplican para los cursos de los diplomados en el
            caso de que éstos se tomen de manera individual.</li>
        </div>
      </div>)
  }
}

//Aranceles
//Quinto panel de navegación
class Admision extends Component {
  render() {
    return (
      <div class="col-sm-11 ">
        <h1>Admisión</h1>
        <Dirigido id= {this.props.id}></Dirigido>
        <h2>Requisitos de ingreso</h2>     
        <hr></hr> 
        <div class="tabular"> 
          <li>Título profesional o Certificado de Egreso (original entregado por la institución de educación superior o fotocopia legalizada ante notario).</li>
          <li>Certificado de nacimiento</li>
          <li>Copia de Cédula de identidad (escaneado por ambos lados).</li>
          <li>Currículum Vitae.</li>
          <li>Ficha de inscripción.</li>
          <li>Nota: Toda esta documentación debe ser enviada en formato digital por e-mail.</li>
        </div>
        <h2>Fechas y modalidad de estudio</h2>  
        <hr></hr> 
        <div class="tabular"> 
          <li>Fecha de inicio: Semana 19 Abril 2021</li>
          <li>Modalidad: El diplomado se dictará en modalidad On-Line.</li>
        </div>
      </div>
    )
  }
}

function Dirigido(props) {
  const id = props.id;
  if (id ===2){
    return <div>
      <h2>Dirigido a</h2>
      <hr></hr>
      <li>El programa está dirigido a todos 
        los profesionales que tengan algún vínculo con las 
        Tecnologías de la Información y Comunicación.</li>
      </div>;
  }
  if (id ===3){
    return <div>
      <h2>Dirigido a</h2>
      <hr></hr>
      <li>El programa esta orientado a todos aquellos profesionales 
        de áreas relacionadas con la informática que requieran
        capacitación en temas relacionados al Riesgo Operacional, así 
        como la Gestión de Continuidad del Negocio. </li>
      </div>;
  }
  if (id === 4){
    return <div>
      <h2>Dirigido a</h2>
      <hr></hr>
      <li> El Programa está dirigido a todas las personas que se encuentren 
        desempeñando funciones tales como auditores, ingenieros informáticos 
        o ejecutivos de estas áreas.</li>
      </div>;
  }
  if (id ===5){
    return <div>
      <h2>Dirigido a</h2>
      <hr></hr>
      <li> El Programa está dirigido a todas las personas que se encuentren desempeñando 
        funciones tales como abogados, ingenieros informáticos, auditores y oficiales de 
        la Fuerzas Armadas o del Orden. </li>
      </div>;
  }
  return <div> </div>;
}
//Contacto
//Sexto panel de navegación
class Contacto extends Component {
  constructor(props) {
    super(props);
    this.state ={
      coordinador : []
    }
  }
  componentDidMount(){
    axios.get(process.env.REACT_APP_BASE_URL + 'docentes/coordinador/' + this.props.id)
    .then(res => {
      var coordinador = res.data;
      this.setState ({coordinador});
      console.log(this.state.coordinador);
    }
      ).catch(error => {console.log(error)});
  }
  render() {
    return (
      <div>
        <div>
          <h1> Contáctanos </h1>
          <div> ¡Envíanos un mail con tus dudas y te contactaremos a la brevedad!
            <p></p>
            Puedes ingresar tus datos a través de nuestro formulario de contacto o 
            directamente a los siguientes correos:</div> 
        </div>
        <p></p>
        <h5> Coordinador </h5>
        {this.state.coordinador.map(coordinador =>
          <div> {coordinador.nombre} <p></p>
          {(coordinador.nombre === "Alcides Quispes")
                  ? <div> Mail : alcides.quispe@usach.cl </div> 
                  : <div> Mail : manuel.villalobos@usach.cl </div> }
          <div>
        </div>
        </div>
          )}
 
        <p></p>
        <h5> Secretaria Diplomados </h5>
        <div>
          Romina Labrin Valenzuela <p></p>
          Mail: romina.labrin@usach.cl <p></p>
          Fono: 22 71 80 905 <p></p>
        </div>
      </div>
    )
  }
}

//Panel principal de navegación
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
                      <SecondPane diplomado = {diplomado} id = {diplomado.id}></SecondPane>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Docentes id = {diplomado.id}></Docentes>
                    </Tab.Pane>
                    <Tab.Pane eventKey="four">
                     <Aranceles arancel = {diplomado.arancel}></Aranceles>
                    </Tab.Pane>
                    <Tab.Pane eventKey="five">
                      <Admision id = {diplomado.id}></Admision>
                    </Tab.Pane>
                    <Tab.Pane eventKey="six">
                      <Contacto  
                      id = {diplomado.id}></Contacto>
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