import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Dashboard from '../Dashboard/Dashboard';

class Routes extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" >
          <IndexRoute component={Dashboard} />
        </Route>
      </Router>
    );
  }
}

export default Routes;
