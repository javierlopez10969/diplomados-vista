import React,{Component} from 'react';
import axios from 'axios';
<<<<<<< Updated upstream
import {Button, Form, Container, Row, Col, InputGroup, Modal, FormFeedback} from 'react-bootstrap';

=======
import {Button, Form, Container, Row, Col, InputGroup, FormFeedback} from 'react-bootstrap';
>>>>>>> Stashed changes
import firebase from 'firebase';

import "firebase/storage"

<script src="https://www.gstatic.com/firebasejs/8.9.0/firebase-app.js"></script>




  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const config = {
    apiKey: 'AIzaSyD2lHQGfkALCVootMtP5Q4oG21-y_pXVW4',
    authDomain: 'proyecto-tingeso.firebaseapp.com',
    projectId: 'proyecto-tingeso',
    storageBucket: 'proyecto-tingeso.appspot.com',
    messagingSenderId: '532912406725',
    appId: '1:532912406725:web:063a5e5830ce0ec769f0ac',
    measurementId: 'G-ZCJD1LSBN8'
  };
  // Initialize Firebase
  export const app = firebase.initializeApp(config);


export default class Postulacion extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            diplomados: [],
            cantidad: null, 
            nombre: "",
            correo: "",
            telefono: "",
            mensajeNombre: '', 
            mensajeCorreo: '',
            mensajeTelefono: '',
            src_doc: "",
            diplomada: null,
            id_postulante: null,
<<<<<<< Updated upstream
            validatorV: null
=======
            validatorV: null,
            contador: 0,
>>>>>>> Stashed changes
            
        }
    }
    
    
    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
          [event.target.name]: isCheckbox
            ? event.target.checked
            : event.target.value
        });
    };
    
 
    validate = () => {
        let mensajeNombre = "";
        let mensajeCorreo = "";
        let mensajeTelefono = "";

        if(!this.state.nombre) {
            mensajeNombre = "Debe ingresar su nombre completo.";
        }

        if(!this.state.nombre.match(/^[a-zA-Z].+\s.+$$/)){
            mensajeNombre = "Debe ingresar solo letras."
        }

        if(!this.state.correo){
            mensajeCorreo = "Debe ingresar un correo. Ejemplo: correo@gmail.com"
        }

        if (!this.state.correo.includes("@") || !this.state.correo.includes(".")) {
            mensajeCorreo = "Correo inválido. Ejemplo: correo@gmail.com";
        }

        if(!this.state.telefono){
            mensajeTelefono = "Debe ingresar su número de teléfono."
        }

        if(this.state.telefono.length > 8 || this.state.telefono.length < 8){
            mensajeTelefono = "El número de teléfono debe poseer 8 dígitos."
        }

        if(!this.state.telefono.match(/^[0-9]+$/)){
            mensajeTelefono = "El número de teléfono solo debe incluir números."
        }

        if (mensajeNombre || mensajeCorreo || mensajeTelefono) {
            this.setState({ mensajeNombre, mensajeCorreo, mensajeTelefono });
            return false;
        }

        return true;
    };

    

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            let validatorV = "";
            const userObject = {
                nombre: this.state.nombre,
                correo: this.state.correo,
                num_telefono: '+569' + this.state.telefono,
                
            };
            
            axios.post(process.env.REACT_APP_BASE_URL + 'postulantes/create', userObject)

            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
                
            //limpiar formulario
            this.setState({ nombre: '', correo: '', telefono: '', mensajeNombre: '', mensajeCorreo: '', mensajeTelefono: ''})
         
            const postulationObject = {
                src_doc: this.state.src_doc,
                id_diplomado: this.state.diplomada,
                id_postulante: this.state.cantidad + 1
            };

            axios.post(process.env.REACT_APP_BASE_URL + 'postulaciones/create', postulationObject)
                .then((res) => {
                    console.log(res.data)
                }).catch((error) => {
                    console.log(error)
                });

            this.setState({ src_doc: '', id_diplomado: ''/*id_postulante: ''*/})

            validatorV = "Se ha creado la postulación con éxito"
            this.setState({ validatorV });

            

        }
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

        axios.get(process.env.REACT_APP_BASE_URL + 'postulantes/count')
        .then(res => {
        var cantidad = res.data;
        this.setState ({
            cantidad
        })}).catch(error => {
        console.log(error)
        });
    }
    
    handleOnChange (event) {

        let numero = Math.random()
        for(let i = 0; i < event.target.files.length; i++)
        {
            const file = event.target.files[i]
           
            const storageRef = firebase.storage().ref(`Postulaciones/${numero}`)
            const fileRef = storageRef.child(file.name)
            fileRef.put(file).then(() => {
                console.log("Archivo subido")
            })

        }
        
    };

    render() {
        return (
            <div>      
              <Container className="justify-content-md-center">
                    <br></br>
                    <Col md={{ span: 6, offset: 4 }}>
                        <h1 > Ingresa tu Postulación! </h1>
                    </Col>
                    
                    <Row >  
                        <Form onSubmit={this.handleSubmit}>
                            <br>
                            </br>
                            <Form.Group className="mb-3" controlId="formBasicOption">
                            <Form.Label>Diplomado</Form.Label>   
                            <Form.Select aria-label="Default select example" onChange={e => this.setState({ diplomada: e.target.value })}>
                                <option>Seleccione el diplomado al que desea postular</option>
                                {this.state.diplomados.map(diplomado => <option value={diplomado.id} >{diplomado.titulo}</option>)}
                            </Form.Select>
                            </Form.Group>
                            <br>
                            </br>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="name" name="nombre" placeholder="Ingrese su nombre completo" value={this.state.nombre} onChange={this.handleChange}/>
                                <div style={{color: "red"}}>{this.state.mensajeNombre}</div>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Correo</Form.Label>
                                <Form.Control type="email" name="correo" placeholder="Ingrese su correo." value={this.state.correo} onChange={this.handleChange}/>
                                <div style={{color: "red"}}>{this.state.mensajeCorreo}</div>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                                <Form.Label>Número teléfonico</Form.Label>
                                <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">+56 9</InputGroup.Text>
                                <Form.Control type="num_telefono" name="telefono" aria-describedby="basic-addon1" placeholder="Ingrese su número de teléfono" value={this.state.telefono} onChange={this.handleChange}/>
                                </InputGroup>
                                <div style={{color: "red"}}>{this.state.mensajeTelefono}</div>
                            </Form.Group>

                            <Form.Group controlId="formFileMultiple" className="mb-3">
                            <Form.Label>Escoja los archivos que desea subir</Form.Label>
                            <Form.Control type="file" multiple onChange={this.handleOnChange}/*name="src_doc" value={this.state.src_doc} onChange={this.handleChange}*//>
                            
                            </Form.Group>
                            <br></br>
                            <Col md={{ span: 5, offset: 4 }}>
                                <h2 style={{color: "blue"}}> {this.state.validatorV} </h2>
                            </Col>
                            <br></br>
                            <Col md={{ span: 5, offset: 6 }}>
                                <Button variant="primary" type="submit">
                                    Postular
                                </Button>
                            </Col>
                        </Form>
                    </Row>
                </Container>
            </div>
        )
    }
}