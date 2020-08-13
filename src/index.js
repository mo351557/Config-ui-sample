import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import { Provider } from 'react-redux';
import store from './store'

import LoginPage from './LoginComponent/LoginPage'
// core components
import Admin from "layouts/Admin.jsx";
import RTL from "layouts/RTL.jsx";

import "assets/css/material-dashboard-react.css?v=1.6.0";

const hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/admin" component={Admin} />
        {<Route path="/rtl" component={RTL} />}
        {/* {<Redirect from="/admin" to="/admin/dashboard" />} */}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
