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
  import axios from "axios";
  import  "./Beauty.css";


  const CardModal = ({ productData }) => {
    const [qty, setQty] = useState(productData?.qty ? productData.qty : 1);
    const toast = useToast();
    const { onOpen, isOpen, onClose } = useDisclosure();
  
    // const handleAddtoCart = (item) => {
    //   if (!item.qty) {
    //     item.qty = qty;
    //     axios.post(`http://localhost:8080/cart`, item).then(() => {
    //       toast({
    //         title: "Product add to cart!",
    //         status: "success",
    //         isClosable: true,
    //       });
    //     });
    //   } else {
    //     item.qty = qty;
    //     axios.patch(`http://localhost:8080/cart/${item.id}`, item).then(() => {
    //       toast({
    //         title: "Product add to cart!",
    //         status: "success",
    //         isClosable: true,
    //       });
    //     });
    //   }
    //   onClose();
    // };
    
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
        <Modal onClose={onClose} size={"3xl"} isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex>
                <Box width="1300px">
                  <Image width="400px" src={productData.image_url} />
                </Box>
                <Box>
                  <Heading as="h4" size="md">
                    {productData.title}
                  </Heading>
                  <Text>{productData.brand}</Text>
                  <Text>BEST SELLER CONSCIOUS BEAUTY</Text>
                  <Text padding="10px 3px">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur rerum placeat modi molestiae numquam tempore
                    doloremque doloribus aliquam suscipit voluptates.
                  </Text>
                  <Box>
                    <Menu>
                      <MenuButton
                        padding="10px 0px"
                        width="100%"
                        as={Button}
                        rightIcon={<ChevronDownIcon />}
                      >
                        Actions
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
                    // onClick={() => handleAddtoCart(productData)}
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
  