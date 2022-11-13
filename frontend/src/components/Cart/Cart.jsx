import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

const Cart = () => {
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

        <Flex border="2px solid" textAlign="center">
          <Box border="2px solid red" w="700px" ml="12rem">
            <Box textAlign="left" fontWeight="semibold">
              SHOPPING BAG
            </Box>
            <Box w="100%" borderWidth={4}>
              <Grid templateColumns="repeat(4, 1fr)">
                <GridItem w="150px" border="2px solid black">
                  <img
                    src="https://cdn.modesens.com/product/16731490_11?w=100"
                    alt=""
                  />
                </GridItem>
                <GridItem w="400px" border="2px solid black" textAlign="left">
                  <Text>ST. TROPEZ</Text>
                  <Text>Self Tan Express Bronzing Mist In Brown,orange</Text>
                  <Text>Size: One Size</Text>
                  <Text>Quantity: 1</Text>
                </GridItem>
                <GridItem w="120px" border="2px solid black" textAlign="left">
                  <Text mt="1.5rem" fontWeight="semibold">
                    $40.00
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
                <Text>1 Items</Text>
                <Spacer />
                <Text>$40.00</Text>
              </Flex>
              <Button
                mt="0.6rem"
                backgroundColor="black"
                color={"white"}
                w="100%"
              >
                GO TO CHECKOUT
              </Button>
              <Text mt="1rem">
                Join now to earn up to 40 points when you buy
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default Cart;
