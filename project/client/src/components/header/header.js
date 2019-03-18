import React from 'react';
import {
  Navbar,
  Nav
 } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './header.scss';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="#home">Coverage</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link className="nav-link" exact="true" to="/">My Items</Link>
              <Link className="nav-link" to="/add">Add</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}