import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

const giphyReducer = (state=[], action) => {
    if (action.type === 'SET_GIPHY') {
        return [
            ...action.payload
        ];
    }
    return state;
};

const searchReducer = (state={}, action) => {
    if (action.type === 'SEARCH_UPDATE_TERM') {
        return {
            term: action.payload
        }
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        searchReducer,
        giphyReducer
    }),
    // manages our state data model in redux
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
