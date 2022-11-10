import Reducer from "./AppReducer/Reducer";
import {legacy_createStore , applyMiddleware}from "redux";
import thunk from 'redux-thunk';



const store = legacy_createStore(Reducer, applyMiddleware(thunk))

import { Reducer as AppReducer } from "./AppReducer/Reducer"

import {legacy_createStore , applyMiddleware}from "redux"
import thunk from 'redux-thunk'


const rootReducer = Reducer;
// const rootReducer = AppReducer; (shankar)

const store = legacy_createStore(rootReducer, applyMiddleware(thunk))


export default store;