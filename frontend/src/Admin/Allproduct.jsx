import { Box } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Productcard from './Productcard'

function Allproduct() {
      const [data,setData]=useState([])
    const getData=()=>{
        axios.get("http://localhost:8000/product/")
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