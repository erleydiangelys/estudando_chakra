import React from 'react';

import { Icon } from '@chakra-ui/icons'
import { HiIdentification } from 'react-icons/hi'
import { Box, Container, Image, Input, InputGroup, InputRightElement, Heading, Flex, Center, Text, Show } from '@chakra-ui/react'

// import { Container } from './styles';
import { Button, useMediaQuery, useColorModeValue } from '@chakra-ui/react';

function LoginForm() {

    const [isLargerThan800] = useMediaQuery('(min-width: 800px)')
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    const img = {
        image1Url: 'https://images.unsplash.com/photo-1529088363398-8efc64a0eb95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=492&q=80',
        image2Url: 'https://images.unsplash.com/photo-1517423738875-5ce310acd3da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=470&q=80',
    }


    return (
        <Container maxW='1200px' mt='10'>
            <Center>
                <Flex display={{ md: 'flex' }} >

                    <Box p='4' mr={{ md: 4 }} boxShadow='base'>
                        <Box>
                            <Heading as='h6' align='center' mt='5' size='ms'>Seja bem vindo ao seu portal de informação!</Heading>
                        </Box>

                        <Box display='flex' direction='row' pt='10'>
                            <Center><Icon as={HiIdentification} color='orange.500'></Icon><Text ml='2' as='h4' size='md'>
                                Preencha seus dados para criar conta
                            </Text></Center>
                        </Box>

                        <Box pt='4' mt='8'>
                            <Text size='md'>Nome</Text>
                            <Input variant='outline' borderRadius='5' placeholder='ex: dogao123' />
                        </Box>

                        <Box mt='6'>
                            <Text size='md'>Senha</Text>
                            <InputGroup size='md'>
                                <Input
                                    pr='4.5rem'
                                    type={show ? 'text' : 'password'}
                                    placeholder='qual será sua senha?'
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                                        {show ? 'Hide' : 'Show'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </Box>

                        <Box pt='6' mt='4' mb='4' align='center'>
                            <Button pl='8' pr='8' borderRadius='25' colorScheme='orange'>Continuar</Button>
                        </Box>

                    </Box>

                    <Box color='gray.500' maxW='600px'>
                        {isLargerThan800 ? (<Image src={img.image1Url} objectFit='cover' />)
                            : (<Image src={img.image2Url} objectFit='cover' width='100%' maxH='250px' />)
                        }

                    </Box>

                </Flex>
            </Center>
        </Container>
    )
}

export default LoginForm;