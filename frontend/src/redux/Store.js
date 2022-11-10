import Reducer from "./AppReducer/Reducer";
import {legacy_createStore , applyMiddleware}from "redux";
import thunk from 'redux-thunk';


const store = legacy_createStore(Reducer, applyMiddleware(thunk))

export default store;