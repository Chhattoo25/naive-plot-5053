import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import CardModal from './CardModal';
import  "./Beauty.css";

const ProductList = ({productData}) => {
  return (
    <div>
        <Box borderWidth={1} fontFamily='SuisseIntl' className='beauty_container'>
            <Box className='imageContainer'><Image className='productImage' src={productData.image_url} alt=''/>
            </Box>
            <Box className='overlay'></Box>
            <CardModal props={productData = {productData}} />
            <Heading textAlign='center' fontSize='14px' fontWeight={700} lineHeight='18px'>{productData.brand}</Heading>
            <Text textAlign='center' pt={2} color='#8e8e8e' fontSize='0.85rem'>{productData.title}</Text>
            <Text textAlign='center' as='del' pt={2}>${productData.offprice} - ${productData.price}</Text>

        </Box>
    </div>
  )
}

export default ProductList