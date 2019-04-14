import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { 
    Container, 
    Row, 
    Col, 
    ListGroup,
    Button } from 'react-bootstrap';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'lodash';

import SearchBar from "../../components/search-bar/search-bar";

import './main-view.scss';


class MainView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: "",
            items: []
        };

        this.searchValue = _.debounce(this.searchValue, 300);
    }

    onEditClick = (evt) => {
        console.log("Edit item clicked: ", evt.target);
    }

    onDeleteClick = (evt) => {

        const id = evt.currentTarget.dataset.itemId;

        axios.delete(`/item/delete/${id}`)
            .then(res => {
                this.getInventory();
            })
            .catch(function (error) {
                // handle error
                console.error(error);
            })


        console.log("Delete item clicked: ", id);
    }

    getInventory() {
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

    componentDidMount() {

        this.getInventory();
    }

    onSearch = (evt) => {
        this.setState({
            "search" : evt.target.value
        });

        this.searchValue(evt.target.value);
    }

    searchValue = (term) => {
        axios.get(`/items/find/${term}`)
            .then(res => {
                const currentState = this.state;    
                const nextState = {
                    items: res.data.items
                };
                this.setState(Object.assign({}, currentState, nextState));
            })
    }

    render() {
        return(
            <Container className="main-view">
                <Row>
                    <Col className="mt-3">
                        <Link to={`/add`}>Add<FontAwesomeIcon icon="plus" /></Link>
                    </Col>
                </Row>
                <Row>
                    <Col className="mt-3">
                        <SearchBar search={this.state.search} onSearch={this.onSearch}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ListGroup as="ul">
                            {
                                this.state.items.map((item, i) => {
                                    return (
                                        <ListGroup.Item as="li" key={item._id} >
                                            <img src="https://via.placeholder.com/100?text=Image+Of+Item" alt="item"/>
                                            <h4>{item.name}</h4>
                                            <h5>{item.manufacturer}</h5>
                                            
                                            <div className="float-right mx-2">
                                                <Button variant="danger" data-item-id={item._id} onClick={this.onDeleteClick}>
                                                    <FontAwesomeIcon icon="trash-alt" />
                                                </Button>
                                            </div>

                                            <div className="float-right mx-2" >
                                                <Button variant="dark" data-item-id={item._id} onClick={this.onEditClick}>
                                                    <FontAwesomeIcon icon="edit" />
                                                </Button>
                                            </div>    
                                            
                                        </ListGroup.Item>
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

export default MainView;