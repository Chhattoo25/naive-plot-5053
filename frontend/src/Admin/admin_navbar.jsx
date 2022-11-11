import { Box, Text } from '@chakra-ui/react'
import React from 'react'

function Adminnavbar() {
  return (
    <div>
        <Box display={"flex"} padding="1%" >
        <Text fontSize='md' ml={"1%"} >Home</Text>
        <Text fontSize='md' ml={"1%"} >User-Handler</Text>
        <Text fontSize='md' ml={"1%"}>fedback</Text>
        <Text fontSize='md' ml={"1%"}>Payment-Track</Text>
        <Text fontSize='md' ml={"1%"}>Cart</Text>
        </Box>
    </div>
  )
}

export default Adminnavbar