import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { createBrowserHistory } from 'history';

import rootReducer from './reducers';


const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL,
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export { history, store };
