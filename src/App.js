import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { store, history } from './store';

import { Login, Main } from './containers';
import './styles/app.scss';

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/main" component={Main} />
        <Redirect to="/login" />
      </Switch>
    </Router>
  </Provider>
);

export default App;
