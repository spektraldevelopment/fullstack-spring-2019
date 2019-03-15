import React, { Component } from 'react';
import { 
    Container, 
    Row, 
    Col, 
    ListGroup, 
    ListGroupItem } from 'reactstrap';

class Main extends Component {
    render() {
        return(
            <Container>
                <Row>
                    <Col>Search Bar</Col>
                </Row>
                <Row>
                    <Col>
                        <ListGroup>
                            <ListGroupItem>Cras justo odio</ListGroupItem>
                            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem>Morbi leo risus</ListGroupItem>
                            <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                            <ListGroupItem>Vestibulum at eros</ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Main;