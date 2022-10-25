import React from 'react';
import { Container, Avatar, AvatarBadge, Box, Flex, Text, Spacer } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react'
import { MessageSquareEdit } from '@styled-icons/boxicons-regular/MessageSquareEdit'


function Perfil() {
    return (
        <Container maxW='1200px' mt={{ base: '20', sm: '20', md: '20' }} mb={{ base: '20', sm: '20', md: '20' }}>
            <Box align='center'  mt='10'>
                <Box>
                    <Avatar size='2xl' bg='gray.500'>
                        <AvatarBadge boxSize='1em' bg='green.500' />
                    </Avatar>
                </Box>

                <Flex maxW='300' direction='column' gap='5' mt='20' fontSize='20'>
                    <Flex>
                        <Text fontWeight='700'>Nome:</Text>
                        <Text ml='20'>ADM</Text>
                        <Spacer />
                        <Icon as={MessageSquareEdit} />
                    </Flex>

                    <Flex>
                        <Text fontWeight='700'>Username:</Text>
                        <Text ml='10'>ADM</Text>
                        <Spacer />
                        <Icon as={MessageSquareEdit} />
                    </Flex>

                    <Flex>
                        <Text fontWeight='700'>Senha:</Text>
                        <Text ml='20'>***</Text>
                        <Spacer />
                        <Icon as={MessageSquareEdit} />
                    </Flex>

                    <Flex gap='2' align='center' mt='5'>
                        <Text fontWeight='700'>DOGS: </Text>
                        <Avatar size='md' bg='gray.500' src='https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'/>
                        <Avatar size='md' bg='gray.500'  src='https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'/>
                        <Avatar size='md' bg='gray.500'  src='https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'/>
                    </Flex>

                </Flex>
            </Box>
        </Container>
    );
}

export default Perfil;