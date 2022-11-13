import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";


const Cart = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([])

  const getData = () => {
    return axios.get("http://localhost:8000/cart").then((r) => {
      setData(r.data.data)
    })
  };

  useEffect(() => {
    getData();
  },[]);

  // if(data.length === 0){
  //   return (
  //     <div style={{textAlign: "center"}}>
  //         <Box
  //         textAlign="center"
  //         fontWeight={700}
  //         fontSize="1.71rem"
  //         lineHeight="40px"
  //         boxSizing="border-box"
  //         fontFamily="SuisseIntl"
  //       >
  //         MODESENS CONCIERGE
  //       </Box>
  //       <Box>
  //         <Text
  //           textAlign="center"
  //           color="#1c1c1c"
  //           noOfLines={[2, 3, 4]}
  //           marginBottom="1.5rem"
  //           fontSize="16px"
  //           fontWeight={400}
  //           lineHeight={1.5}
  //         >
  //           Let ModeSens determine which store fulfill your request to get the
  //           best price for the product you want <br /> -enjoy a worry free
  //           experience with no additional cost to you.
  //         </Text>
  //       </Box>
  //       <Text margin="200px" textAlign="center" marginBottom="30px">
  //         Your Bag is Empty
  //       </Text>
  //       <Button
  //         margin="auto"
  //         alignItems="center"
  //         colorScheme="facebook"
  //         marginBottom="30px"
  //         onClick={() => navigate("/brandProducts")}
  //       >
  //         ADD SOMETHING
  //       </Button>
  //     </div>
  //   )
  // }
  
  return (
    <div>
      <Box w="100%" alignItems="center" border="2px solid red">
        <Box
          textAlign="center"
          fontWeight={700}
          fontSize="1.71rem"
          lineHeight="40px"
          boxSizing="border-box"
          fontFamily="SuisseIntl"
        >
          MODESENS CONCIERGE
        </Box>
        <Box>
          <Text
            textAlign="center"
            color="#1c1c1c"
            noOfLines={[2, 3, 4]}
            marginBottom="1.5rem"
            fontSize="16px"
            fontWeight={400}
            lineHeight={1.5}
          >
            Let ModeSens determine which store fulfill your request to get the
            best price for the product you want <br /> -enjoy a worry free
            experience with no additional cost to you.
          </Text>
        </Box>

        {/* *********mapping the data********* */}

      <div>
        {data?.map((item) => {
          console.log("item:",item);
          return<Flex border="2px solid" textAlign="center">
            <Box border="2px solid red" w="700px" ml="12rem">
              <Box textAlign="left" fontWeight="semibold">
                SHOPPING BAG
              </Box>
              <Box w="100%" height='150px' borderWidth={4}>
                <Grid templateColumns="repeat(4, 1fr)">
                  <GridItem w="150px"  border="2px solid black">
                    <img
                      src={item.image1}
                      alt=""
                      
                    />
                  </GridItem>
                  <GridItem w="400px" border="2px solid black" textAlign="left">
                    <Text>{item.title}</Text>
                    <Text>{item.name}</Text>
                    <Text>{`Size: ${item.size}`}</Text>
                    <Text>{`Quantity: ${item.quantity}`}</Text>
                  </GridItem>
                  <GridItem w="120px" border="2px solid black" textAlign="left">
                    <Text mt="1.5rem" fontWeight="semibold">
                      {item.price}
                    </Text>
                    <Text mt="4rem">Save For Later</Text>
                  </GridItem>
                  <GridItem w="20px" border="2px solid black" fontWeight="bold">
                    x
                  </GridItem>
                </Grid>
              </Box>
            </Box>
            <Spacer />
            <Box w="400px" border="2px solid teal" mr="12rem">
              <Box textAlign="left" fontWeight="semibold">
                SUMMARY
              </Box>
              <Box borderWidth={4}>
                <Flex mt="0.4rem">
                  <Text>Currency</Text>
                  <Spacer />
                  <Text>USD</Text>
                </Flex>
                <Flex mt="0.4rem">
                  <Text>
                    1
                    {/* `(${localData.length} Items)` */}
                  </Text>
                  <Spacer />
                  <Text>
                    {item.price}
                    {/* $40.00 */}
                    {/* Subtotal */}
                    {/* {item.price.slice(1) * item.qty} */}
                  </Text>
                </Flex>
                <Link to='/payment'>
                  <Button
                    mt="0.6rem"
                    backgroundColor="black"
                    color={"white"}
                    w="100%"
                    >
                    GO TO CHECKOUT
                  </Button>
                  </Link>
                <Text mt="1rem">
                  Join now to earn up to 40 points when you buy
                </Text>
              </Box>
            </Box>
          </Flex>
        })}
      </div>
      </Box>
    </div>
  );

  }
export default Cart;
