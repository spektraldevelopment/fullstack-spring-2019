import React, { Component } from 'react';
import { 
    Container, 
    Row, 
    Col, 
    ListGroup } from 'react-bootstrap';
import axios from 'axios';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    componentDidMount() {

        axios.get('/items/get')
            .then(res => {
                const currentState = this.state;    
                const nextState = {
                    items: res.data.items
                };
                this.setState(Object.assign({}, currentState, nextState));
            })
            .catch(function (error) {
                // handle error
                console.error(error);
            })
    }

    render() {
        return(
            <Container>
                <Row>
                    <Col>Search Bar</Col>
                </Row>
                <Row>
                    <Col>
                        <ListGroup as="ul">
                            {
                                this.state.items.map((item, i) => {
                                    return (
                                        <ListGroup.Item as="li" key={i}>{item.name}</ListGroup.Item>
                                    );
                                })
                            }
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Main;