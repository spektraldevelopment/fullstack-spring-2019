import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit, faTrashAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
//import logo from './logo.svg';

import Header from './components/header/header';
import Main from './views/main/main';
import Add from './views/add/add';
import Edit from './views/edit/edit';

//Import font awesome icons
library.add(faEdit);
library.add(faTrashAlt);
library.add(faSearch);

class App extends Component {
  render() {
    return (
      <>
        <Header />
          <Route exact path="/" component={Main}/>
          <Route exact path="/add" component={Add}/>
          <Route exact path="/edit" component={Edit}/>
      </>
    );
  }
}

export default App;
