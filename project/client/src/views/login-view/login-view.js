import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Alert, Container, Col, Row, Form, Button } from 'react-bootstrap';

class LoginView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            redirectToMain: false,
            showError: false
        }
    }

    onLogin = (evt) => {
        evt.preventDefault();
        
        axios.post('/user/login', {
            "email": this.state.email,
            "password": this.state.password
        })
        .then((response) => {
            console.log("LOGIN RESPONSE: ", response);
            this.setState({
                showError: false,
                redirectToMain: true
            });
        })
        .catch((error) => {
            console.error("No BUENO!!!: ", error);
            this.setState({
                showError: true
            });
        });

    }

    onFieldChange = (evt) => {
        switch (evt.target.id) {
            case 'email-input':
                this.setState({
                    email: evt.target.value
                });
                break;
            case 'password-input':
                this.setState({
                    password: evt.target.value
                });
                break;

            default:
                console.log("No known input");
        }
    }

    render() {

        let alert;

        if(this.state.showError) {
            alert = <Alert key="danger" variant="danger">The email and/or password is incorrect. Please try again.</Alert>;
        }

        if(this.state.redirectToMain) {
            return(
                <Redirect exact to="/" />     
            );
        } else {
            return(
                <>

                    <Container>
                        <Row>
                            <Col md={{ span: 6, offset: 3 }}>
                                {alert}
                                <Form>
                                    <Form.Group controlId="email-input">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control 
                                            type="email" 
                                            placeholder="Enter email" 
                                            value={this.state.email}
                                            onChange={this.onFieldChange}/>
                                    </Form.Group>

                                    <Form.Group controlId="password-input">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control 
                                            type="password" 
                                            placeholder="Password" 
                                            value={this.state.password}
                                            onChange={this.onFieldChange}/>
                                    </Form.Group>
                                    <Button variant="primary" type="submit" onClick={this.onLogin}>
                                        Submit
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>;
                </>
            )
        }
    }
}

export default LoginView;