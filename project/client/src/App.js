import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faEdit, faTrashAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
//import logo from './logo.svg';

//Global Components
import Header from './components/header/header';

//Views
import MainView from './views/main-view/main-view';
import AddView from './views/add-view/add-view';
import EditView from './views/edit-view/edit-view';
import ItemView from './views/item-view/item-view';

//Import font awesome icons
library.add(faPlus);
library.add(faEdit);
library.add(faTrashAlt);
library.add(faSearch);

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Route exact path="/" component={MainView}/>
        <Route exact path="/add" component={AddView}/>
        <Route exact path="/edit" component={EditView}/>
        <Route exact path="/item/:id" component={ItemView}/>
      </>
    );
  }
}

export default App;
