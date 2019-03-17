import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

//import SimpleRouter from './route-examples/example1';
//import SimpleRouter from './route-examples/example2';
//import SimpleRouter from './route-examples/example3';
//import SimpleRouter from './route-examples/example4';

import './index.css';

import {
    Grid
} from '@material-ui/core';

import Pokemon from './pokemon/Pokemon';

class Root extends Component {

    state = {
        pokemon: []
    };

    componentDidMount() {
        fetch(`https://pokeapi.co/api/v2/pokemon`)
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    pokemon: data.results
                });
            })
    }

    render() {
        const { pokemon } = this.state;
    
        return (

            <Router>
                <Route exact path='/' render={() => {
                    return (
                        <Grid container className={'{ flexGrow: 1 }'} spacing={16}>
                            <Grid item xs={12}>
                                <Grid container justify="center" spacing={16}>
                                    {
                                    pokemon.map((poke) => {
                                        return (
                                        <Grid key={poke.url} item>
                                            <Pokemon
                                            name={poke.name}
                                            url={poke.url}
                                            />
                                        </Grid>
                                        );
                                    })
                                    }
                                </Grid>
                            </Grid>
                        </Grid>
                    );    
                }}/>
                <Route 
                    exact 
                    path='/pokemon/:name' 
                    render={(props) => <Pokemon name={props.match.params.name} />} 
                />
            </Router>
        )
      }
}

export default Root;


ReactDOM.render(<Root />, document.getElementById('root'));
