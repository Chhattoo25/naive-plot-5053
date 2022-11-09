import { Reducer as AppReducer } from "./AppReducer/Reducer"
import {legacy_createStore , applyMiddleware}from "redux"
import thunk from 'redux-thunk'


const rootReducer = AppReducer;

const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export default store;