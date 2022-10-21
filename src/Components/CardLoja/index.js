import React from 'react';
import { UserContext } from '../../Context/UserContext';
import { useToast,  Flex, Box, useColorModeValue, Tag, Circle, Image, useDisclosure, Button, Badge, Icon, Text, Modal, ModalFooter, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, } from '@chakra-ui/react';

import {ShoppingCartOutline} from '@styled-icons/evaicons-outline/ShoppingCartOutline';
import {ResizeFullScreen} from '@styled-icons/entypo/ResizeFullScreen';



    function CardLoja({data}) {
      const { login, itensCarrinho, setItensCarrinho, descCarrinho, setDescCarrinho } = React.useContext(UserContext);
      const { isOpen, onOpen, onClose } = useDisclosure()
      const [DesCar, setDesCar] = React.useState([])
      const toast = useToast()

      React.useEffect(() => { 
        setDesCar(descCarrinho)
      }, [descCarrinho]); 

    
      // nao ta adicionando ao arrey
      let dados = []
      function addCart(){
        
        descCarrinho.push(data)
        setItensCarrinho(itensCarrinho + 1)
        toast({
          title: 'Produto Adicionado',
          description: `Produto ${data.name} adicionado ao carrinho`,
          status: 'success',
          position: 'top-right',
          duration: 9000,
          isClosable: true,
          size: '300',
      })
    } 


        return (
          <>
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

                <Tag position="absolute" size="10px" p='1' top={2} left={2}  rounded="full" borderRadius='8px' bgColor='white.50' onClick={onOpen}>
                  <Icon as={ResizeFullScreen} color='black' w='2 ' h='2' />
                </Tag>

              <Image
                src={data.imageURL}
                alt={`Picture of ${data.name}`}
                roundedTop="lg"
                objectFit='cover'
                // boxSize='200px'
                w='100%'
                h='100%'
                onClick={onOpen} 
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
                  <Button p='2' rightIcon={<Icon as={ShoppingCartOutline}/>} colorScheme='green' variant='outline' onClick={addCart}>
                    +
                    </Button>
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

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>
                  <Badge colorScheme='blue' mr='2'>{data.name}</Badge>
                  <Badge colorScheme='orange' mr='2'>{data.price}</Badge>
                  {/* <Badge colorScheme='whatsapp' mr='2'>{raca}</Badge> */}
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Image src={data.imageURL} />
                </ModalBody>

                <ModalFooter>
                  {/* <Tag variant='solid' colorScheme='red' ><Icon as={HeartFill} mr='2' /> {likes}</Tag> */}
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>

        );
      }
      
      export default CardLoja;