import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Dashboard from '../Dashboard/Dashboard';
// import Login from '../Login/Login';

class Routes extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" >
          <IndexRoute component={Dashboard} />
          {/* <Route path="Dashboard" name="Dashboard" component={Dashboard} /> */}
        </Route>
      </Router>
    );
  }
}

export default Routes;
