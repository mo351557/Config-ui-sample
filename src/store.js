import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import math from './reducers/mathReducer';
import user from './reducers/userReducer';
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware';
// const myLogger = (store) => (next) => (action) => {
//     // console.log("logger action: ", action);
//     next(action);
// }

const store = createStore(combineReducers({
    math,
    user
}),
    {},
    applyMiddleware(createLogger(), thunk, promise)
);

export default store;