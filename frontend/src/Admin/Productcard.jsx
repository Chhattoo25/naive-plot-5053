import { Box, Button, Image, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect } from 'react'

function Productcard(item) {
    const handleDelete=(id)=>{
        const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjM2Y2FkYjM3YjRkZGRhNTc4ZjNlZWVhIiwiaWF0IjoxNjY4MTUyMzcwfQ.ioJXgNiBV65ttbJaXleTd2gwou45J1DfOTdWKkeEc4Y"
      axios.delete(`http://localhost:8000/product/delete/${id}`,{headers:{
        "Authorization" : `Bearer ${token}`
      }})
      .then((res)=>{
        alert("item deleted")
        window.location.reload()
      })
      .catch((err)=>{
        console.log(err)
      })
    }

  return (
    <div>
        <Box mb={"1%"} display={"flex"} border="1px solid black" >
            <Box>
            <Text>ID:{item.data._id}</Text>
            <Text>Name:{item.data.name}</Text>
            <Text>Title:{item.data.title}</Text>
            <Text>Price:${item.data.price}</Text>
            </Box>

            <Box display={"flex"}>
                <Image  boxSize='100px'   src={item.data.image1}/>
                <Image  boxSize='100px'   src={item.data.image2}/>
                <Image  boxSize='100px'   src={item.data.image3}/>
            </Box>

            <Box>
                <Button colorScheme='blue' mb={"2%"}>Edit</Button>
                <br />
                <Button colorScheme='red' onClick={()=>handleDelete(item.data._id)} >Delete</Button>
            </Box>

        </Box>
    </div>
  )
}

export default Productcard