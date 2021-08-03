import React,{Component} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Postulacion extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            diplomados: [], 
            nombre: "",
            correo: "",
            telefono: ""
        }
    }
    
    onSubmit = () => {
        console.log(this.state.nombre);
        const userObject = {
            nombre: this.state.nombre,
            correo: this.state.correo,
            num_telefono: this.state.telefono
        };

        axios.post(process.env.REACT_APP_BASE_URL + 'postulantes/create', userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ nombre: '', correo: '', num_telefono: ''})
    };

    componentDidMount() {
        //Obtener diplomados
        axios.get(process.env.REACT_APP_BASE_URL + 'diplomados').then(res => {
            var diplomados = res.data;
            this.setState({ diplomados });
            this.getAllDiplomado();
        }).catch(error => {
            console.log(error)
        });
    }

    render() {
        return (
            <div>      
              <Container className="justify-content-md-center">
                    <br></br>
                    <Col md={{ span: 6, offset: 4 }}>
                        <h1 > Ingresa tu Postulación! </h1>
                    </Col>

                    <Row >  
                        <Form>
                            <Form.Label>Diplomado</Form.Label>    
                            <Form.Select aria-label="Default select example">
                                <option>Seleccione el diplomado al que desea postular</option>
                                {this.state.diplomados.map(diplomado => <option value="1">{diplomado.titulo}</option>)}
                            </Form.Select>
                            <br></br>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="name" placeholder="Ingrese su nombre" value={this.state.nombre} onChange={e => this.setState({ nombre: e.target.value })}/>
                                <Form.Text className="text-muted">
                                Ingrese su nombre completo.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Correo</Form.Label>
                                <Form.Control type="email" placeholder="Ingrese su correo" value={this.state.correo} onChange={e => this.setState({ correo: e.target.value })}/>
                                <Form.Text className="text-muted">
                                Ingrese un correo de contacto.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                                <Form.Label>Número teléfonico</Form.Label>
                                <Form.Control type="num_telefono" placeholder="Ingrese su número de teléfono" value={this.state.telefono} onChange={e => this.setState({ telefono: e.target.value })}/>
                                <Form.Text className="text-muted">
                                El número debe contener 9 digitos.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formFileMultiple" className="mb-3">
                            <Form.Label>Escoja los archivos que desea subir</Form.Label>
                            <Form.Control type="file" multiple />
                            </Form.Group>
                            <br></br>

                            <Col md={{ span: 5, offset: 6 }}>
                                <Button variant="primary" type="submit" onClick={this.onSubmit}>
                                    Enviar
                                </Button>
                                
                            </Col>

                        </Form>
                    </Row>
                </Container>
            </div>
        )
    }
}