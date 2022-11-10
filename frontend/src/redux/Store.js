
import Reducer from "./AppReducer/Reducer"

import { Reducer as AppReducer } from "./AppReducer/Reducer"

import {legacy_createStore , applyMiddleware}from "redux"
import thunk from 'redux-thunk'


const rootReducer = Reducer;
const rootReducer = AppReducer;

const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export default store;