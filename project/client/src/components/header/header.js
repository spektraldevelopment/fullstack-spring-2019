import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import './header.scss';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <Link className="navbar-brand" to="/">Coverage</Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className="nav-link" to="/add">Add</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/edit">Edit</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}