import React,{Component} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
        axios.get(process.env.REACT_APP_BASE_URL + 'postulacion').then(res => {
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
              
              <Container className="justify-content-md-center">
                  <br></br>
                  <h1 > Ingresa tu Postulación! </h1>
                  <br></br>
                <Row >  
                <Form>

                <Form.Label>Diplomado</Form.Label>    
                <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter Name" />
                        <Form.Text className="text-muted">
                        We'll never share your name with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="num_telefono" placeholder="Phone Number" />
                    </Form.Group>

                    <Form.Group controlId="formFileMultiple" className="mb-3">
                    <Form.Label>Multiple files input example</Form.Label>
                    <Form.Control type="file" multiple />
                    </Form.Group>

                    <Col md={{ span: 6, offset: 6 }}>
                    <Button  variant="primary" type="submit">
                        Submit
                    </Button>
                    </Col>
                </Form></Row>
                </Container>
              
            </div>
        )
    }
}