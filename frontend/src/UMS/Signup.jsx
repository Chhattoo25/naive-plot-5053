import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    FormLabel,
    Input,
    Flex,
    Box,
    Spacer,
    Text,
    Image

  } from '@chakra-ui/react'

const Signup = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  return (
    <div>
      <Button onClick={onOpen}>SignUP</Button>
      <Modal 
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent sx={{width:'500px'}}>
          
          <ModalCloseButton />
          <ModalBody  pb={6}>
          <Box  display="flex" alignItems="center" justifyContent="" gap='20px'>
      
          <Box bg= 'black'>
            
            hello
          </Box>
          <Box>
          <ModalHeader>Create your account</ModalHeader>
          <Box textAlign="center" mb="20px">
          <Text>Unleash your shopping power.</Text>
          <Text>Check ModeSens before you buy.</Text>
          </Box>
          
          
          <FormControl>
              <Input type="email" placeholder='Enter Email' />
            </FormControl>
          <FormControl mt={4}>
              <Input type='password' placeholder='Enter Password' />
            </FormControl>
            
            <Button w='100%' bg='black' color='white' mt='20px'>
              SIGN UP
            </Button>

            <Flex> 
                <Image
                  borderRadius='full'
                  boxSize='50px'
                  mr='50px'
                  marginTop='40px'
                  src='data:image/png;base64,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'
                  alt='Dan Abramov'
                />
                    <Image
                  borderRadius='full'
                  boxSize='50px'
                  mr='50px'
                  marginTop='40px'
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEDjFgvol6ql5gBeAJ4P0rsMLDj7KFy0vKzQ&usqp=CAU'
                  alt='Dan Abramov'
                />
                <Image
                  borderRadius='full'
                  boxSize='50px'
                  mr='50px'
                  marginTop='40px'
                  src='data:image/png;base64,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'
                  alt='Dan Abramov'
                />
                    <Image
                  borderRadius='full'
                  boxSize='45px'
                  // mr4520px'
                  marginTop='40px'
                  src='data:image/png;base64,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'
                  alt='Dan Abramov'
                />
            </Flex> 
            <Text mt='20px' textAlign='center' textDecoration='underline' fontSize='15px'>
              Already have an account?Please sign in</Text>
            </Box>
          </Box>
            

            
          </ModalBody>

          
            
            <Text textAlign='center' fontSize='15px'>By creating an account,I agree to</Text>
            <Text textAlign='center' mb='20px' fontSize='15px'> the Terms of use and the Privacy Policy</Text>
        </ModalContent>
      </Modal>
      


    
      
    </div>
  )
}

export default Signup