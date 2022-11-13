import axios from "axios";
import * as type from "./ActionType";

export const getData =(params)=> (dispatch)=>{
    dispatch({type:type.GET_DATA_REQUEST})
  //  return axios.get('https://modesens-web-app-backend.herokuapp.com/beauty',{params})
  return axios.get("http://localhost:8000/product/filter?gender=women&category=beauty",{params})
    .then((r)=>{
         console.log(r.data.data);             
      dispatch({type:type.GET_DATA_SUCCESS,payload:r.data.data})
      })
      .catch((e)=>{
      dispatch({type:type.GET_DATA_FAILURE,payload:e})
    })
   }


   

