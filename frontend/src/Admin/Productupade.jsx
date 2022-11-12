import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
    FormControl,
    FormLabel,
    Box,
    Input,
    Select,
    Text,
    Image,
    Button,
  } from '@chakra-ui/react'

function Productupade() {
    const {id}=useParams()
    const [product,setProduct]=useState([])

    const getProduct=(id)=>{
        const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjM2Y2FkYjM3YjRkZGRhNTc4ZjNlZWVhIiwiaWF0IjoxNjY4MTUyMzcwfQ.ioJXgNiBV65ttbJaXleTd2gwou45J1DfOTdWKkeEc4Y"
        axios.get(`http://localhost:8000/product/${id}`,{headers:{
            "Authorization" : `Bearer ${token}`
          }})
        .then((res)=>{
           setProduct(res.data.data)
        })
        .catch((err)=>{
            console.log(err)
        })

    }
    console.log(product)

    const [title,setTitle]=useState("")
    const [name,setName]=useState("")
    const [type,setType]=useState("")
    const [price,setPrice]=useState("")
    const [subtype,setSubtype]=useState("")
    const [size,setSize]=useState("")
    const [discription,setDiscription]=useState("")
    const [image1,setImage1]=useState("")
    const [image2,setImage2]=useState("")
    const [image3,setImage3]=useState("")
    const [brand,setBrand]=useState("")
    const [category,setCategory]=useState("")
    const [colour,setColour]=useState("")
    const [quantity,setQuantity]=useState("")

    const handleSubmit=()=>{
        const payload={
         title:title,
         name:name,
         type:type,
         price:price,
         sub_type:subtype,
         size:size,
         discription:discription,
         image1:image1,
         image2:image2,
         image3:image3,
         brand:brand,
         colour:colour,
         category:category,
         quantity:Number(quantity)
        }
        console.log(payload)
    }


    useEffect(()=>{
        getProduct(id)
    },[id])
    
  return (
    <div>
        <Box border="5px solid black">

       <Box mb={"1%"} display={"flex"}  >
            <Box>
            <Text>ID:{product._id}</Text>
            <Text>Name:{product.name}</Text>
            <Text>Title:{product.title}</Text>
            <Text>Price:${product.price}</Text>
            <Text>Off-Price:{product.offprice}</Text>
            <Text>Quantity:{product.quantity}</Text>
            <Text>Type:{product.type}</Text>
            <Text>Sub-Type:{product.sub_type}</Text>
            </Box>

            <Box display={"flex"}>
                <Image  boxSize='100px'   src={product.image1}/>
                <Image  boxSize='100px'   src={product.image2}/>
                <Image  boxSize='100px'   src={product.image3}/>
            </Box>

        </Box>
            <Text >ID:{product.discription}</Text>
           
        </Box>



        <Box  w='100%' p={4} color='white'>
      <FormControl  color={"black"}>
        <Box display={"flex"}>
         <FormLabel>Product Title</FormLabel>
         <Input type='text' placeholder={title}  defaultValue={product.title}  onChange={(e)=>setTitle(e.target.value) }  />
         
         <FormLabel>Product Name</FormLabel>
         <Input type='text' onChange={(e)=>setName(e.target.value)}  defaultValue={product.name}  />
         </Box>
         
         <Box display={"flex"}>
         <FormLabel>Type</FormLabel>
         <Input type='text' onChange={(e)=>setType(e.target.value)}  defaultValue={product.type} />

         <FormLabel>Sub-Type</FormLabel>
         <Input type='text' onChange={(e)=>setSubtype(e.target.value)}  defaultValue={product.sub_type} />
        
         <FormLabel>Price</FormLabel>
         <Input type='text' onChange={(e)=>setPrice(e.target.value)}  defaultValue={product.price} />

         <FormLabel>Size</FormLabel>
         <Input type='text' onChange={(e)=>setSize(e.target.value)}  defaultValue={product.size}  />
         
         <FormLabel>Quantity</FormLabel>
         <Input type='Number' onChange={(e)=>setQuantity(e.target.value)}   defaultValue={product.quantity} />
         </Box>

        <Box display={"flex"}>
         <FormLabel>Category</FormLabel>
         <Select placeholder='Select option' onChange={(e)=>setCategory(e.target.value)  }  defaultValue={product.category}>
            <option value='men'>Men</option>
            <option value='women'>Women</option>
            <option value='kids'>Kids</option>
         </Select>
         

         <FormLabel>Colour</FormLabel>
         <Select placeholder='Select option' onChange={(e)=>setColour(e.target.value)}  defaultValue={product.colour} >
            <option value='red'>Red</option>
            <option value='green'>Green</option>
            <option value='yellow'>Yellow</option>
            <option value='blue'>Blue</option>
            <option value='black'>Black</option>
            <option value='grey'>Grey</option>
            <option value='pink'>Pink</option>
         </Select>


         <FormLabel>Brand</FormLabel>
         <Select placeholder='Select option' onChange={(e)=>setBrand(e.target.value)}  defaultValue={product.brand} >
            <option value='zara'>Zara</option>
            <option value='nike'>Nike</option>
            <option value='denis lingua'>Denis Lingua</option>
            <option value='white and blue'>White And Blue</option>
            <option value='jorden'>Jorden</option>
            <option value='armani'>Armani</option>
            <option value='u.s polo'>U.S Polo</option>
         </Select>
         </Box>
         
         <Box display={"flex"} margin="1%">
         <FormLabel>Discription</FormLabel>
         <Input type='text' onChange={(e)=>setDiscription(e.target.value)}  defaultValue={product.discription} />
         </Box>
         
         <Box display={"flex"} margin="1%">
         <FormLabel>Image-1 URL</FormLabel>
         <Input type='text' onChange={(e)=>setImage1(e.target.value)}  defaultValue={product.image1} />

         <FormLabel>Image 2 URL</FormLabel>
         <Input type='text' onChange={(e)=>setImage2(e.target.value)}  defaultValue={product.image2} />
         
         <FormLabel>Image 3 URL</FormLabel>
         <Input type='text' onChange={(e)=>setImage3(e.target.value)}  defaultValue={product.image3} />
         </Box>
          
      </FormControl>
      <Button onClick={handleSubmit}colorScheme="green" >Add Product</Button>
      </Box>
    </div>
  )
}

export default Productupade