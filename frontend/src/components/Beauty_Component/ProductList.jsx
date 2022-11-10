import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const ProductList = ({productData}) => {
  return (
    <div>
        <Box borderWidth={4} fontFamily='SuisseIntl' >
            <Box><Image src={productData.image_url} alt='' h='350px' /></Box>
            <Heading textAlign='center' fontSize='14px' fontWeight={700} lineHeight='18px'>{productData.brand}</Heading>
            <Text textAlign='center' pt={2} color='#8e8e8e'  fontSize='0.85rem'>{productData.title}</Text>
            <Text textAlign='center' pt={2}>${productData.offprice} - ${productData.price}</Text>

        </Box>
    </div>
  )
}

export default ProductList