import React from 'react';
import { Flex, Box, useColorModeValue, Circle, Image, Tooltip, Button, Badge, Icon, Text } from '@chakra-ui/react';
import {ShoppingCartOutline} from '@styled-icons/evaicons-outline/ShoppingCartOutline';

const data = {
    isNew: true,
    imageURL:
      'https://images.unsplash.com/photo-1625556580790-7ce9101965b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGNhbmluZSUyMHRveXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
    name: 'Almofada canina',
    price: '54,50',
    desciption: 'confortavel e facil de lavar',
    estoque: 34,
  };

    function CardLoja() {
        return (
          <Flex p={50} w="full" alignItems="center" justifyContent="center">
            <Box
              bg={useColorModeValue('white', 'gray.800')}
              maxW="sm"
              borderWidth="1px"
              rounded="lg"
              shadow="lg"
              position="relative">
              {data.isNew && (
                <Circle
                  size="10px"
                  position="absolute"
                  top={2}
                  right={2}
                  bg="green.200"
                />
              )}
      
              <Image
                src={data.imageURL}
                alt={`Picture of ${data.name}`}
                roundedTop="lg"
              />
      
              <Box p="6">
                <Flex d="flex" alignItems="center" justify='space-between'>
                  <Box>
                  <Icon as={ShoppingCartOutline} h={7} w={7} alignSelf={'center'} />
                  {data.isNew && (
                    <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="green">
                      New
                    </Badge>
                  )}
                  </Box>
                  <Button p='2' rightIcon={<Icon as={ShoppingCartOutline}/>} colorScheme='green' variant='outline'>+</Button>
                </Flex>
                <Flex mt="1" justifyContent="space-between" alignContent="center">
                  <Box
                    fontSize="xl"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated>
                    {data.name}
                  </Box>
                  
                </Flex>
      
                <Flex justifyContent="space-between" alignContent="center">
                  <Text fontSize="md">{data.desciption}</Text>
                </Flex>
                  <Box fontSize="2xl" align='end' color={useColorModeValue('gray.800', 'white')}>
                    <Box as="span" color={'gray.600'} fontSize="lg">
                      R$
                    </Box>
                    {data.price}
                  </Box>
              </Box>
            </Box>
          </Flex>
        );
      }
      
      export default CardLoja;