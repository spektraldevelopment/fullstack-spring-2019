import React, { Component } from 'react';
import { Route } from 'react-router-dom';
//import logo from './logo.svg';

import Header from './components/header/header';
import Main from './views/main/main';
import Add from './views/add/add';
import Edit from './views/edit/edit';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
          <Route exact path="/" component={Main}/>
          <Route exact path="/add" component={Add}/>
          <Route exact path="/edit" component={Edit}/>
      </div>
    );
  }
}

export default App;
