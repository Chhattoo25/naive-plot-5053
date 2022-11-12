import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Productupade from '../../Admin/Productupade'

function Adminupdateproduct() {
  return (
    <div>
            
        <Productupade/>
        <Box>
        <Link to="/admin"><Button colorScheme={"green"} >Go to home</Button></Link>
        </Box>
    </div>

  )
}

export default Adminupdateproduct