import React from 'react';
import { Container,Heading, Icon, Box, Grid,  Center, Stack, Text, Link } from '@chakra-ui/react'

import {Storefront} from '@styled-icons/ionicons-sharp/Storefront';

import produtos from '../../Data/cardLoja-mock.json'
import CardLoja from './../../Components/CardLoja/index';
const data = produtos.Produtos

function Loja() {
  return (
    <Container maxW='1200px' mt={{ base: '2', sm: '2', md: '5' }}>

    <Stack spacing='10px'>

    <Center>
        <Box w='100%'>   {/* parte da exposição */}
        <Box>
            <Heading fontSize='20' m='2' align='center' mb='5'>Loja<Icon w={4} as={Storefront} ml='2' /></Heading>
          </Box>
        <Grid templateColumns={{sm: 'repeat(1, 1fr)', xsm:'repeat(2, 1fr)', md: 'repeat(3, 1fr)', }} gap='5' m='2'>           
        {data.map((card, index) => (
          <CardLoja key={index} data={card} />
        ))}
        </Grid>

          <Box>
        </Box>
        </Box>
      </Center>

    </Stack>

  </Container>
  );
}

export default Loja;