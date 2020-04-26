import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Header from './Header/Header.js';
import Dashboard from './Dashboard/Dashboard.js';
import Alert from './Alert/Alert.js';
import Login from './accounts/Login/Login.js';
import Register from './accounts/Register/Register.js';
import PrivateRoute from './common/PrivateRoute/PrivateRoute.js';


import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth'

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: 'top center'
};

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Header />
              <Alert />
              <div className="container">
                <Switch>
                  <PrivateRoute exact path="/" component= {Dashboard} />
                  <Route exact path="/register" component= {Register} />
                  <Route exact path="/login" component= {Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));