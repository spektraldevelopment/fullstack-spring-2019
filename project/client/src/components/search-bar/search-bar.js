import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    InputGroup,
    FormControl
} from 'react-bootstrap';

class SearchBar extends Component {
    render() {
        return (
            <>
                <InputGroup className="mb-3">
                    <FormControl
                    placeholder="Search"
                    aria-label="Search bar"
                    aria-describedby="search-bar"
                    />
                    <InputGroup.Append>
                    <InputGroup.Text id="search-bar">
                        <FontAwesomeIcon icon="search" />
                    </InputGroup.Text>
                    </InputGroup.Append>
                </InputGroup>

            </>
        );
    }
}

export default SearchBar;