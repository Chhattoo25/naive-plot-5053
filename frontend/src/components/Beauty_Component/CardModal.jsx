import {
    Box,
    Text,
    Image,
    Button,
    Flex,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
    Heading,
    MenuButton,
    MenuList,
    MenuItem,
    Menu,
    useToast,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  import { ChevronDownIcon } from "@chakra-ui/icons";
  import { RiDislikeLine } from "react-icons/ri";
  import { BsFillBagPlusFill } from "react-icons/bs";
  import  "./Beauty.css";
import axios from "axios";
import { useEffect } from "react";


  const CardModal = ({ productData }) => {
    const [qty, setQty] = useState(productData?.qty ? productData.qty : 1);
    const toast = useToast();
    const { onOpen, isOpen, onClose } = useDisclosure();
  
    // const handleAddtoCart = (item) => {
    //   if (!item.qty) {
    //     item.qty = qty;
    //     axios.post(`http://localhost:8000/cart`, item).then(() => {
    //       toast({
    //         title: "Product add to cart!",
    //         status: "success",
    //         isClosable: true,
    //       });
    //     });
    //   } else {
    //     item.qty = qty;
    //     axios.patch(`http://localhost:8000/cart/${item.id}`, item).then(() => {
    //       toast({
    //         title: "Product add to cart!",
    //         status: "success",
    //         isClosable: true,
    //       });
    //     });
    //   }
    //   onClose();
    // };
    

    const handleAddtoCart = () => {
      const {user_id,_id}=productData
      const payload={
        user_id:user_id,
        product_id:_id,
        quantity:qty
      }
      
      axios.post("http://localhost:8000/cart/addtocart",payload)
      .then((res)=>{
        toast({
                  title: "Product add to cart!",
                  status: "success",
                  isClosable: true,
                });
      })
      .catch((err)=>{
        console.log(err)
      })

      onClose();
    }

    useEffect(() => {
      
    },[])

    return (
      <>
        <button
          onClick={() => {
            return onOpen();
          }}
          className='productViewButton'
        >
          Quick View
        </button>
        <Modal onClose={onClose} size={"4xl"} isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex>
                <Box width="500px" h='400px'>
                  <Image width="400px" h='400px' src={productData.image1} />
                </Box>
                <Box>
                  <Heading as="h4" size="md">
                    {productData.brand}
                  </Heading>
                  <Text>{productData.title}</Text>
                  <Text fontWeight='semibold' >${productData.price}</Text>
                  <Text fontWeight='semibold'  padding="10px 3px">
                   Shop From 5 Stores
                  </Text>
                  <Text fontWeight='semibold'  padding="10px 3px">
                  Join now to earn up to 345 points when you buy
                  </Text>
                  <Box>
                    <Menu>
                      <MenuButton
                        padding="10px 0px"
                        width="100%"
                        as={Button}
                        rightIcon={<ChevronDownIcon />}
                      >
                        Select Size
                      </MenuButton>
                      <MenuList>
                        <MenuItem width="100%"></MenuItem>
                        <MenuItem>small</MenuItem>
                        <MenuItem>Meidium</MenuItem>
                        <MenuItem>Large</MenuItem>
                        <MenuItem>Extra Large</MenuItem>
                      </MenuList>
                    </Menu>
                  </Box>
                  <Flex
                    padding="10px 30px"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Box>
                      <Button
                        onClick={() => setQty(qty - 1)}
                        border="0.5px solid black"
                        disabled={qty === 1}
                      >
                        -
                      </Button>
                      <Button border="0.5px solid black">{qty}</Button>
                      <Button
                        onClick={() => setQty(qty + 1)}
                        border="0.5px solid black"
                      >
                        +
                      </Button>
                    </Box>
                    <Box>
                      <Flex gap="12px">
                        {" "}
                        <RiDislikeLine /> WishList
                      </Flex>
                    </Box>
                  </Flex>
                  <Button
                    onClick={() => handleAddtoCart(productData)}
                    margin="5px 0px"
                    bgColor="#12284C"
                    color="white"
                    width="100%"
                    _hover={{ backgroundColor: "#12281C" }}
            
                  >
                    <BsFillBagPlusFill />
                    &#xFEFF;&#xFEFF; Add To Bag
                  </Button>
                </Box>
              </Flex>
            </ModalBody>
            <ModalFooter>
              {/* <Button onClick={onClose}>Close</Button> */}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };
  
  export default CardModal;
  