import { Box, Button, Center, Flex, Heading, Image, SimpleGrid, Spacer,Text  } from '@chakra-ui/react';
import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react';

  import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem
  } from '@chakra-ui/react'
import {useDispatch, useSelector} from "react-redux";
import { useEffect } from 'react';
import { getData } from '../../redux/AppReducer/Action';
import CardModal from './CardModal';
import { useSearchParams } from 'react-router-dom';

const Beauty = () => {
    const data = useSelector((state) => state.data);
    const dispatch = useDispatch();
    const [searchParams,setSearchParams] = useSearchParams();
    const initialCategory = searchParams.getAll("category");
    const [category, setCategory] = useState(initialCategory || []);
    const [sort, setSort] = useState("asc")
    let params = {
        // _sort: "price",
        _order: sort
    }

    useEffect(() => {
        if(data.length === 0){
            dispatch(getData())
        }
    },[])

    useEffect(() => {
        if(category){
            category &&(params.category = category);
            setSearchParams(params)
            dispatch(getData(params)).then((res) => {
                const productCard = document.querySelectorAll(".beauty_container");
                productCard?.forEach((item) => {
                    item.addEventListener("mouseenter", () => {
                        let button = item.children[1].children[0].lastChild;
                        // button.style.bottom = "0";
                        // button.style.opacity = "1";
                        // button.style.backgroundcolor = "black";
                    })
                })

                productCard?.forEach((item) => {
                    item.addEventListener("mouseleave", () => {
                      let button = item.children[1].children[0].lastChild;
                    //   button.style.bottom = "-50px";
                    //   button.style.opacity = "0";
                    });
                  });
            })
        }
    },[sort])

    
  return (
    <Box  w='100%'  >
        <Box height='100px' w='80%' ml='20%' >
            <Box fontWeight={500} lineHeight='40px' fontSize='1.71rem' color='#1c1c1c' fontFamily='SuisseIntl' pt={2}>
                Designer Beauty
            </Box>
            
            <Box fontSize='0.85rem' fontWeight='semibold' cursor='pointer' color='#1c1c1c' pt={4}>Shop designer beauty with price comparison across 500+ stores in one place. Discover the latest designer beauty at ModeSens.</Box>
        </Box>

        <Flex>
            {/* filter and sorting box */}
            <Box  w='20%' pl={2}>
                <Box fontFamily='SuisseIntl' color='#8e8e8e' alignItems='center'>MODESENS / SHOP / BEAUTY</Box>

                <Flex pt={2}>
                    <Box>10,000+ ITEMS</Box>
                    <Spacer/>
                    <Box><SearchIcon  w={4} h={4}/></Box>
                </Flex>
                <Flex pt={2} fontFamily='SuisseIntl' fontSize='0.85rem'  fontWeight={700} color= '#1c1c1c'>
                    <Box>Filter By:</Box>
                    <Spacer/>
                    <Box>Reset</Box>
                </Flex>

                <Box>
                    {/* Adding 3 dropdown box */}

                    <Accordion defaultIndex={[0]} allowMultiple>
                        <AccordionItem>
                            
                            <AccordionButton>
                                <Box flex='1' textAlign='left' fontSize='12px' fontWeight={500} color='#8E8E8E'>
                                Gender: All
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            
                            <AccordionPanel pb={4} cursor='pointer' >
                            <Text>All</Text>
                            <Text>Men</Text>
                            <Text>Women</Text>
                            <Text>Kids</Text>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionButton>
                                <Box flex='1' textAlign='left' fontSize='12px' fontWeight={500} color='#8E8E8E'>
                                Condition: New
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4} cursor='pointer'>
                            <Text>All</Text>
                            <Text>New</Text>
                            <Text>Pre-Owned</Text>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left' fontSize='12px' color='#8E8E8E' fontWeight={500}>
                                Category: Beauty
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} cursor='pointer'>
                            <Text>All</Text>
                            <Text>Clothing</Text>
                            <Text>Shoes</Text>
                            <Text>Bags</Text>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>

                <Box borderColor='gray' borderWidth={2} h='3rem' cursor='pointer'>
                    <Center p={2} fontSize='1rem' fontWeight='semibold' fontFamily='SuisseIntl'>SAVE MY SEARCH</Center>
                </Box>

                <Box color='#1c1c1c' fontSize='14px'fontWeight='semibold' mt={3} cursor='pointer'>My Saved Searches</Box>

                <Box mt={3} ml={1} cursor='pointer'>
                    {/* Releated Women */}
                    <Box>
                        <Box fontWeight='semibold' fontSize='0.9rem' mt={2}>Releated Category Women</Box>
                        <Box  color='#8E8E8E' fontSize='12px'>
                            <Text mt={2}>Women Beauty</Text>
                            <Text mt={2}>Women Beauty Sale</Text>
                            <Text mt={2}>Home</Text>
                            <Text mt={2}>Accessories</Text>
                            <Text mt={2}>Bags</Text>
                        </Box>
                    </Box>

                    {/* Releated Men */}

                    <Box>
                        <Box mt={2} fontWeight='semibold'>Releated Category Men</Box>
                        <Box  color='#8E8E8E' fontSize='12px'>
                            <Text mt={2}>Men Grooming</Text>
                            <Text mt={2}>Men Gromming Sale</Text>
                            <Text mt={2}>Home</Text>
                            <Text mt={2}>Accessories</Text>
                            <Text mt={2}>Bags</Text>
                        </Box>
                    </Box>

                    {/* Releated Kids */}

                    <Box>
                        <Box mt={2} fontWeight='semibold'>Releated Category Kids</Box>
                        <Box  color='#8E8E8E' fontSize='12px'>
                            <Text mt={2}>Kid Care</Text>
                            <Text mt={2}>Kid Care Sale</Text>
                            <Text mt={2}>Home</Text>
                            <Text mt={2}>Accessories</Text>
                            <Text mt={2}>Bags</Text>
                        </Box>
                    </Box>
                </Box>

            </Box>

            {/* all items */}

            <Box w='80%'>

                {/* adding sorting key */}

                <Box ml='88%'>
                    <Menu >
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                            Best Sellers
                        </MenuButton>
                        <MenuList >
                            <MenuItem>New Arrivals</MenuItem>
                            <MenuItem>Most liked</MenuItem>
                            <MenuItem onClick={() => setSort("desc")}>Highest Price</MenuItem>
                            <MenuItem onClick={() => setSort("asc")}>Lowest Price</MenuItem>
                            <MenuItem>New Sale</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>

                <Box>
                    <SimpleGrid columns={[1, 1, 3, 4]}>

                        {/* mapping all the data */}
                        
                            {data.length > 0 && data.map((productData) => {
                                
                                return <Box borderWidth={1} fontFamily='SuisseIntl' className='beauty_container'>
                                            <Box className='imageContainer'><Image className='productImage' src={productData.image_url} alt=''/>
                                            </Box>
                                            <Box className='overlay'></Box>
                                            <CardModal productData={productData} />
                                            <Heading textAlign='center' fontSize='14px' fontWeight={700} lineHeight='18px'>{productData.brand}</Heading>
                                            <Text textAlign='center' pt={2} color='#8e8e8e' fontSize='0.85rem'>{productData.title}</Text>
                                            <Flex gap={4} ml='7rem'>
                                                <Text as='del' color='red'>${productData.offprice}</Text>
                                                <Text>${productData.price}</Text>
                                            </Flex>
                                
                                        </Box>
                                })}
                        
                    </SimpleGrid>
                </Box>

            </Box>
        </Flex>
    </Box>
  )
}

export default Beauty
