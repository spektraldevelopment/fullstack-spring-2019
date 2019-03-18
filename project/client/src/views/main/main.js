import React, { Component } from 'react';
import { 
    Container, 
    Row, 
    Col, 
    ListGroup } from 'react-bootstrap';
import axios from 'axios';

import Common from '../../common/common'

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

        const reqUrl = `${Common.ENV}`;

        console.log(reqUrl);

        // axios.get(reqUrl)
        //     .then(res => {

        //         console.log(`Response: ${res}`);

        //         // const movieInfo = res.data;

        //         // this.setState({ 
        //         //     isLoading: false,
        //         //     title : movieInfo.title,
        //         //     description: movieInfo.overview,
        //         //     genres : movieInfo.genres,
        //         //     tagline : movieInfo.tagline,
        //         //     runtime : movieInfo.runtime,
        //         //     poster: `https://image.tmdb.org/t/p/w370_and_h556_bestv2${movieInfo.poster_path}`
        //         //  })
        //     })
        //     .catch(function (error) {
        //         // handle error
        //         console.error(error);
        //     })
    }

    render() {
        return(
            <Container>
                <Row>
                    <Col>Search Bar</Col>
                </Row>
                <Row>
                    <Col>
                        <ListGroup>
                            <ListGroup.Item>Cras justo odio9uh98</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Main;