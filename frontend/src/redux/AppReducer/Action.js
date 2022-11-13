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

  //  const getData=()=>{
  //   const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjM2Y2FkYjM3YjRkZGRhNTc4ZjNlZWVhIiwiaWF0IjoxNjY4MTUyMzcwfQ.ioJXgNiBV65ttbJaXleTd2gwou45J1DfOTdWKkeEc4Y"
  //     axios.get("http://localhost:8000/product/",{headers:{
  //       "Authorization" : `Bearer ${token}`
  //     }})
  //     .then((res)=>{
  //        setData(res.data.data)
  //     })
  //     .catch((err)=>{
  //         console.log(err)
  //     })
  // }
   