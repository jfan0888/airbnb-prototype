import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { store, history } from './store';

import { Main } from './containers';
import './styles/app.scss';

const App = () => (
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={Main}
                />
                <Redirect to="/" />
            </Switch>
        </Router>
    </Provider>
)

export default App;
