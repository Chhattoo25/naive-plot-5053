import * as types from "./ActionType";

const initialState = {
    data: [],
    isLoading: false,
    isError: false
}

function Reducer(state = initialState, action){
    const {type,payload} = action;
    switch(type){
        case types.GET_DATA_REQUEST:
            return {...state, isLoading: true}
        case types.GET_DATA_SUCCESS:
            return{...state, isLoading: false, data: payload, isError: false}
        case types.GET_DATA_FAILURE:
            return{...state, isLoading: false, data:[], isError: false}
        default: 
            return state;
    }

}

export default Reducer;