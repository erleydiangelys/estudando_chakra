import React from 'react';

import { Icon } from '@chakra-ui/icons'
import { HiIdentification } from 'react-icons/hi'
import { Box, Container, Image, Input, Heading, Flex, Center, Text  } from '@chakra-ui/react'

// import { Container } from './styles';
import { Button } from '@chakra-ui/react';

function LoginForm() {

    const img = {
        imageUrl: 'https://sso.acesso.gov.br/assets/govbr/img/conta_govbr_v2.jpg', 
    }

    
      return (
        <Container maxW='1200px'mt='10'>
            <Center>
            <Flex display={{ md: 'flex' }}>
                <Box color='gray.500' maxW='600px'>
                    <Image src={img.imageUrl}/>
                </Box>

                <Box p='4' ml={{ md: 4}} boxShadow='base'>
                    <Box>
                        <Heading as='h6' size='ms'>Identifique-se no gov.br com:</Heading>
                    </Box>

                    <Box display='flex' direction='row'pt='10'>
                    <Center><Icon as={HiIdentification} color='blue'></Icon><Text ml='2' as='h4' size='md'>Número do CPF</Text></Center>
                    </Box>

                    <Box pt='4'>
                        <Text fontSize='13'>Digite seu CPF para <strong>criar</strong> ou  <strong>Acessar</strong> sua conta gov.br</Text>
                    </Box>

                    <Box pt='4'>
                        <Text size='md'>CPF</Text>
                        <Input variant='outline' borderRadius='5' placeholder='Digite seu CPF' />
                    </Box>

                    <Box pt='6'  align='end'>
                        <Button pl='6' pr='6' borderRadius='25' colorScheme='messenger'>Continuar</Button>
                    </Box>
                </Box>
            </Flex>
            </Center>
        </Container>
      )
}

export default LoginForm;