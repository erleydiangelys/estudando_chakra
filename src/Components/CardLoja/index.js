import React from 'react';
import { Flex, Box, useColorModeValue, Circle, Image, Tooltip, Button, Badge, Icon, Text } from '@chakra-ui/react';
import {ShoppingCartOutline} from '@styled-icons/evaicons-outline/ShoppingCartOutline';



    function CardLoja({data}) {
        return (
          <Flex p={1}  w="full" alignItems="center" justifyContent="center">
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
                objectFit='cover'
                // boxSize='200px'
                w='100%'
                h='100%'
              />
      
              <Box p="4" bg={useColorModeValue('white', 'black')} roundedBottom="lg">
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
                    fontSize='md'
                    fontWeight="semibold"
                    as="h4"
                    minH={{sm: '50px', xsm:'60px', md: '60px' }}
                    lineHeight="tight">
                    {data.name}
                  </Box>
                  
                </Flex>
      
                <Flex justifyContent="space-between" alignContent="center">
                  <Text minH='50px' fontSize="sm">{data.desciption}</Text>
                </Flex>
                  <Box align='end' color={useColorModeValue('gray.800', 'white')}>
                    <Box as="span" color={'gray.600'} fontSize="lg">
                    <Badge fontSize="md"> R$ {data.price}</Badge>
                    </Box>
                  </Box>
              </Box>
            </Box>
          </Flex>
        );
      }
      
      export default CardLoja;