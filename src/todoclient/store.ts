import { combineReducers, createStore } from "redux";
import todoReducer from "./reducers/index";
import {composeWithDevTools} from "redux-devtools-extension";
// import rootSaga  from './../saga/rootSaga';
// import createSagaMiddleware from 'redux-saga';

// let rootReducer = combineReducers({data:todoReducer})
// let sagaMiddleware = createSagaMiddleware()

export const store = createStore(todoReducer,composeWithDevTools())
// sagaMiddleware.run(rootSaga)