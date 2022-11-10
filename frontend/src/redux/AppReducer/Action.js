import axios from "axios";
import * as type from "./ActionType";


// const isDataLoading =  {
//     type: type.GET_DATA_REQUEST
// }

// const isDataLoadingSuccess = (payload) => {
//     return {
//         type: type.GET_DATA_SUCCESS,
//         payload: payload
//     }
// }

// const isDataLoadingFailed = {
//     type: type.GET_DATA_FAILURE
// }

// export const getData = () => (dispatch) => {
//     dispatch(isDataLoading);
//     return axios
//         .get('https://modesens-web-app-backend.herokuapp.com/beauty')
//         .then((r) => {
//             return dispatch(isDataLoadingSuccess(r.data));
//           })
//           .catch((err) => {
//             dispatch(isDataLoadingFailed);
//           });
// }

export const getData =()=> (dispatch)=>{
    dispatch({type:type.GET_DATA_REQUEST})
   return axios.get('https://modesens-web-app-backend.herokuapp.com/beauty')
    .then((r)=>{
                      
    dispatch({type:type.GET_DATA_SUCCESS,payload:r.data})
    })
    .catch((e)=>{
    dispatch({type:type.GET_DATA_FAILURE,payload:e})
    })
   }
   