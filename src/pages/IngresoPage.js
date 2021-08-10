import React,{Component} from 'react';
import axios from 'axios';
import {Button,Form,Col,Row,Card} from 'react-bootstrap'


class InicioSesion extends Component {
    state={
        form:{
            email: "",
            password: ""
        },
        error:false,
        errorMsg:""
    }
    handleSubmit = e=>{
        e.preventDefault();
    }
    handleChange= async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form);
    }

    iniciarSesion=()=>{
        axios.post(process.env.REACT_APP_BASE_URL +'login/'+ this.state.form.email +'/'+this.state.form.password)
        .then(response=>{
            return response.data;
            /*window.localStorage.setItem(
                'loggedNoteAppUser', JSON.stringify()
            )*/
            //window.location = '/diplomados';
        })
        .then(response=>{
            if(response.length>0){
                var respuesta=response;
                window.localStorage.setItem(
                    'loggedNoteAppUser', JSON.stringify(respuesta)
                )
                window.location = '/';
            }
            else{
                alert("Email o contraseña incorrectas")
            }    
        })
        .catch(error=>{
            console.log(error);
        })
    }
    render(){
        return(
            <div className="container d-flex justify-content-center">
            <Card style={{ width: '45rem', top: '2rem', display: 'flex', justifyContent: 'center', borderColor: 'transparent' }}>
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" >
                        <Form.Label column sm="2">
                        Email
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control placeholder="email@example.com" name="email" onChange={this.handleChange} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        Password
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="password" placeholder="Password" name="password" onChange={this.handleChange}/>
                        </Col>
                    </Form.Group>
                    <div className="input-field">
                        <Button name = "submit" variant="primary" onClick={()=>this.iniciarSesion()}>Iniciar</Button>
                    </div>
                {this.state.error === true &&
                    <div className="alert alert-danger" role="alert">
                        {this.state.errorMsg}
                        </div>
                }
                </Form>
            </Card>
            </div>
        )
    }
}


export default InicioSesion