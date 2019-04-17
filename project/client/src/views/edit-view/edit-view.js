import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

import axios from 'axios';

class EditView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productName: "",
            manufacturer: "",
            serial: "",
            cost: "",
            redirectToMain: false
        }
    }

    onFieldChange = (evt) => {
        switch (evt.target.id) {
            case 'name-input':
                this.setState({
                    productName: evt.target.value
                });
                break;
            case 'manufacturer-input':
                this.setState({
                    manufacturer: evt.target.value
                });
                break;
            case 'serial-input' :
                this.setState({
                    serial: evt.target.value
                });
                break;

            case 'cost-input' :
                this.setState({
                    cost: evt.target.value
                });
                break;

            default:
                console.log("No known input");
        }
    }

    onEditSubmitItem = (evt) => {

        evt.preventDefault();

        const { id } = this.props.match.params;

        axios.post(`/item/edit/${id}`, {
            "name": this.state.productName,
            "nameLower": this.state.productName.toLowerCase(),
            "manufacturer": this.state.manufacturer,
            "serial": this.state.serial,
            "cost" : this.state.cost,
            "imageUrl": "http://via.placeholder.com/1600x500",
            "receiptImageUrl": "http://via.placeholder.com/500x100",
            "serialImageUrl": "http://via.placeholder.com/360x640",
            "thumbnailUrl": "http://via.placeholder.com/100x100"
        })
        .then((response) => {
            this.setState({
                redirectToMain: true
            });
        })
        .catch((error) => {
            console.error("No BUENO!!!: ", error);
        });
    }

    componentDidMount() {

        const { id } = this.props.match.params;

        axios.get(`/item/get/${id}`)
            .then(res => {
                const item = res.data.item;

                this.setState({
                    productName: item.name,
                    manufacturer: item.manufacturer,
                    serial: item.serial,
                    cost: item.cost
                });
            })
    }

    render() {
        const { redirectToMain } = this.state;

        if(redirectToMain) {
            return(
                <Redirect exact to="/" />     
            );
        } else {
            return (
                <Container>
                    <Row>
                        <Col>
                            <Form>
                                <Form.Group controlId="name-input">
                                    <Form.Label>Product Name</Form.Label>
                                    <Form.Control 
                                        placeholder="" 
                                        value={this.state.productName} 
                                        onChange={this.onFieldChange}/>   
                                </Form.Group>
    
                                <Form.Group controlId="manufacturer-input">
                                    <Form.Label>Manufacturer</Form.Label>
                                    <Form.Control 
                                        placeholder="" 
                                        value={this.state.manufacturer}
                                        onChange={this.onFieldChange}/>   
                                </Form.Group>
    
                                <Form.Group controlId="serial-input">
                                    <Form.Label>Serial</Form.Label>
                                    <Form.Control 
                                        placeholder=""
                                        value={this.state.serial}
                                        onChange={this.onFieldChange} />   
                                </Form.Group>
    
                                <Form.Group controlId="cost-input">
                                    <Form.Label>Cost</Form.Label>
                                    <Form.Control 
                                        placeholder="" 
                                        value={this.state.cost}
                                        onChange={this.onFieldChange}/>   
                                </Form.Group>
    
                                <Button variant="primary" type="submit" onClick={this.onEditSubmitItem}>
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            );
        }
    }
}

export default EditView;