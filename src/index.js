import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

// Initial feedback information
const initialFeedback = {
    feeling: '',
    understanding: '',
    support: '',
    comments: ''
}

// Reducer of an array of all feedback
const feedbackResults = (state=[], action) => {
    return state;
}

// Reducer adding each type of feedback
const feedbackCategory = (state = initialFeedback, action) => {
    // setting feeling feedback
    if (action.type === 'SET_FEELING') {
        return {
            ...state,
            feeling: action.payload
        }
    }

    // setting understanding feedback
    if (action.type === 'SET_UNDERSTANDING') {
        return {
            ...state,
            understanding: action.payload
        }
    }

    // setting support feedback
    if (action.type === 'SET_SUPPORT') {
        return {
            ...state,
            support: action.payload
        }
    }

    // setting comments feedback
    if (action.type === 'SET_COMMENTS') {
        return {
            ...state,
            support: action.payload
        }
    }

    // returning state by default
    return state;
} // end feedbackCategory

// Redux Store
const reduxStore = createStore(
    combineReducers({
        feedbackResults,
        feedbackCategory
    }),
    // adding logger
    applyMiddleware(logger)
)

// Implementing react-redux
ReactDOM.render(<Provider store={reduxStore}><App /></Provider>,
    document.getElementById('root'));

registerServiceWorker();