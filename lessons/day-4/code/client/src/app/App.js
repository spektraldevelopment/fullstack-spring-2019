import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Placeholder from './Placeholder';
import AppBar from '../appbar/AppBar';
import Drawer from '../drawer/Drawer';
import Portfolio from '../portfolio/Portfolio';

const styles = (theme) => ({
  root: {
    display: 'flex',
  },
});

class App extends Component {
  state = {
    portfolios: [],
    stocks: [
      { id: 1, symbol: 'SHOP', name: 'Shopify Inc.', close: '198.7500' },
      { id: 2, symbol: 'SBUX', name: 'Starbucks Corporation', close: '71.9600' },
      { id: 3, symbol: 'DBX', name: 'Dropbox Inc.', close: '21.7200' },
    ]
  };

  handlePortfolioAdd = async (portfolioName) => {

    const portfolioData = {
      name: portfolioName,
      userId: 'me'
    }

    const res = await fetch('/api/portfolios', { 
      method: 'POST', 
      body: JSON.stringify(portfolioData),
      headers: {
        'Content-type': 'application/json'
      }
    }); 
    const data = await res.json();

    const currentPortfolios = this.state.portfolios;
    const nextPortfolios = [].concat(currentPortfolios, portfolioData);

    // console.group('App::handlePortfolioAdd');
    // console.log('this.props:', this.props);
    // console.log('portfolio:', portfolio);
    // console.log('currentPortfolios:', currentPortfolios);
    // console.log('nextPortfolios:', nextPortfolios);
    // console.groupEnd();

    this.setState({
      portfolios: nextPortfolios,
    });
  }

  onFetchPortfolios = (portfolios) => {
    this.setState({
      portfolios,
    })
  }

  renderDrawer(props) {
    return (
      <Drawer
      {...props}
      portfolios={this.state.portfolios}
      onAddPortfolio={this.handlePortfolioAdd}
      onFetchPortfolios={this.onFetchPortfolios}
    />
    );
  }

  render () {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Router className={classes.root}>
          <Route
            exact path='/'
            render={(routeProps) => {
              // console.group('App::RootRoute::render');
              // console.log('routeProps:', routeProps);
              // console.groupEnd();
              return (
                <>
                  <AppBar title={'Stock Portfolio App'} />
                  {this.renderDrawer(routeProps)}
                  <Placeholder />
                </>
              );
            }}
          />
          <Route
            exact path='/portfolios/:portfolio'
            render={(routeProps) => {
              const portfolioRouteId = routeProps.match.params.portfolio;
              // console.group('App::PortfolioRoute::render');
              // console.log('routeProps:', routeProps);
              // console.groupEnd();
              return (
                <>
                  <AppBar title={'Stock Portfolio App'} />
                  {this.renderDrawer(routeProps)}
                  <Portfolio
                    {...routeProps}
                    routeName={portfolioRouteId}
                    portfolio={this.state.portfolios.filter((p) => p.id === portfolioRouteId).pop()}
                    stocks={this.state.stocks}
                  />
                </>
              );
            }}
          />
        </Router>
      </div>
    );
  }
}

export default withStyles(styles)(App);
