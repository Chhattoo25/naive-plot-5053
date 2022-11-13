import { Box } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Productcard from './Productcard'

function Allproduct() {
      const [data,setData]=useState([])
    const getData=()=>{
      const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjM2Y2FkYjM3YjRkZGRhNTc4ZjNlZWVhIiwiaWF0IjoxNjY4MTUyMzcwfQ.ioJXgNiBV65ttbJaXleTd2gwou45J1DfOTdWKkeEc4Y"
        axios.get("http://localhost:8000/product/",{headers:{
          "Authorization" : `Bearer ${token}`
        }})
        .then((res)=>{
           setData(res.data.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
 
    useEffect(()=>{
       getData()
    },[])

  return (
    <Box>
        {
            data.map((item)=>{
                return <Productcard key={item._id} data={item} />
            })
        }
    </Box>
  )
}

export default Allproduct