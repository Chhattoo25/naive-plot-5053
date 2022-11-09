import * as ways from "./ActionType";

const initialState = {
    data: [],
    isLoading: false,
    isError: false
}

function Reducer(state = initialState, {type,payload}){
    switch(type){
        case ways.GET_DATA_REQUEST:
            return {...state, isLoading: true}
        case ways.GET_DATA_SUCCESS:
            return{...state, isLoading: false, data: payload, isError: false}
        case ways.GET_DATA_FAILURE:
            return{...state, isLoading: false, data:[], isError: false}
        default: 
            return state;
    }

}

export default Reducer;