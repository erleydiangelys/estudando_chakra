import React from 'react';

import { Icon, ExternalLinkIcon } from '@chakra-ui/icons'
import { Dog } from '@styled-icons/boxicons-solid/Dog'
import { EyeClose } from '@styled-icons/remix-line/EyeClose'
import { Eye } from '@styled-icons/remix-line/Eye'
import { FcGoogle } from 'react-icons/fc'

import { Button, useMediaQuery, useColorModeValue, Box, Link, Container, Image, Stack, Input, InputGroup, InputRightElement, Heading, Flex, Center, Text, Show } from '@chakra-ui/react'



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

                    <Box p='4' borderRadius='5' mr={{ md: 4 }} boxShadow='base'>
                        <Box>
                            <Heading as='h6' align='center' mt='5' fontSize={{ base: 25, md: 22, lg: 28 }} maxW={{ md: '25ch' }}>Seja bem vindo ao portal do mundo Canino!</Heading>
                        </Box>

                        <Center>
                            <Box align='center' display='flex' direction='row' pt='10'>
                                <Icon as={Dog} color='orange.500' /><Text ml='2' as='h4' size='md'>
                                    Preencha suas credenciais para iniciarmos
                                </Text>
                            </Box>
                        </Center>

                        <Box pt='4' mt='8'>
                            {/* <Text size='md'>nome:</Text> */}
                            <Input variant='outline' borderRadius='5' placeholder='Nome de usuario' />
                        </Box>

                        <Box mt='8'>
                            {/* <Text size='md'>senha:</Text> */}
                            <InputGroup size='md'>
                                <Input
                                    pr='4.5rem'
                                    type={show ? 'text' : 'password'}
                                    placeholder='digite aqui sua senha'
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button h='2rem' size='sm' bg='transparent'  onClick={handleClick}>
                                        {show ? <Icon as={EyeClose} color='orange.500' /> : <Icon as={Eye} color='orange.500' />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </Box>


                        <Stack mt={{sm: 10, md: 10, lg: 20 }} spacing='20px'>
                            <Button w={'full'} borderRadius='5' colorScheme='orange'>
                                <Center>
                                    <Text>Login</Text>
                                </Center>
                            </Button>

                            
                            <Button w={'full'} borderRadius='5' variant={'outline'} leftIcon={<FcGoogle />}>
                                <Center>
                                    <Text>Login com Google</Text>
                                </Center>
                            </Button>

                            <Box>
                                <Center>
                                    <Text>Não tem conta? <Link href='/'> crie aqui</Link></Text>
                                </Center>
                            </Box>
                        </Stack>


                    </Box>

                    <Box color='gray.500' maxW='600px'>
                        {isLargerThan800 ? (<Image borderRadius='5' src={img.image1Url} objectFit='cover' />)
                            : (<Image borderRadius='5' src={img.image2Url} objectFit='cover' width='100%' maxH='250px' />)
                        }

                    </Box>

                </Flex>
            </Center>
        </Container>
    )
}

export default LoginForm;