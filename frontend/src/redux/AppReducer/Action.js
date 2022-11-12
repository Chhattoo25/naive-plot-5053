import axios from "axios";
import * as type from "./ActionType";

export const getData =(params)=> (dispatch)=>{
    dispatch({type:type.GET_DATA_REQUEST})
   return axios.get('https://modesens-web-app-backend.herokuapp.com/beauty',{params})
    .then((r)=>{
                      
    dispatch({type:type.GET_DATA_SUCCESS,payload:r.data})
    })
    .catch((e)=>{
    dispatch({type:type.GET_DATA_FAILURE,payload:e})
    })
   }
   