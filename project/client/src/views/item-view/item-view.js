import React, { Component } from 'react';

import {
    Jumbotron,
    Container,
    Image,
    Row,
    Col
} from 'react-bootstrap';

class ItemView extends Component {

    componentDidMount() {
        const { match } = this.props;

        console.log("Match is: ", match.params.id);
    }

    render() {
        return(
            <>
                {/* Item name and image */}
                <Jumbotron fluid>
                    <Container>
                        <h1>Item Name</h1>
                        <Image src="https://via.placeholder.com/768x320.png" fluid />
                    </Container>
                </Jumbotron>

                <Container>

                {/* Manufacturer */}
                    <Row>
                        <Col>
                            
                        </Col>
                    </Row>

                {/* Serial # */}

                {/* Cost */}

                {/* Receipt */}
                </Container>

            </>
        );
    }
}

export default ItemView;