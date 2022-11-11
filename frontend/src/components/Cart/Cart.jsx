import { Box, Flex, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

const Cart = () => {
  return (
    <div >
        <Box>
            <Box textAlign='center' fontWeight={700} fontSize='1.71rem' lineHeight='40px' boxSizing='border-box' fontFamily='SuisseIntl'>MODESENS CONCIERGE</Box>
            <Box>
                <Text textAlign='center' color='#1c1c1c' noOfLines={[2,3,4]} marginBottom='1.5rem' fontSize='16px' fontWeight={400} lineHeight={1.5}>Let ModeSens determine which store fulfill your request to get the best price for the product you want <br /> -enjoy a worry free experience with no additional cost to you.</Text>
            </Box>

            <Flex border='2px solid' width='840px' textAlign='center' ml='13rem'>
                <Box>
                    <Box>SHOPPING BAG</Box>
                    <Box w='90%' border='2px solid'>

                    </Box>
                </Box>
                <Spacer/>
                <Box>
                    <Box>SUMMARY</Box>
                </Box>
            </Flex>


        </Box>
    </div>
  )
}

export default Cart