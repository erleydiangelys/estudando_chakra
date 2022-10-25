import React from 'react';
import { Link as ReactLink } from "react-router-dom";

import { Icon } from '@chakra-ui/react'
import {ExternalLink} from '@styled-icons/heroicons-solid/ExternalLink';
import {Newspaper} from '@styled-icons/ionicons-sharp/Newspaper';
import {Trophy} from '@styled-icons/icomoon/Trophy';
import {Storefront} from '@styled-icons/ionicons-sharp/Storefront';

import {Container, Box, Flex,Spacer, Center,Text, Heading, Stack, useMediaQuery} from '@chakra-ui/react'
import CardCarrousel from '../../Components/Carrousel/CardCarrousel';
import GridMaterias from '../../Components/GridMaterias';


import cards from '../../Data/dogs-mock.json'
import CardLoja from '../../Components/CardLoja';
import GridLoja from './../../Components/GridLoja/index';
import GridNoticias from './../../Components/GridNoticias/index';
const CardItens = cards.Dogs

function Home() {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')
  const [isLargerThan320] = useMediaQuery('(min-width: 550px)')
  return (
    <Container maxW='1200px' mt={{ base: '20', sm: '20', md: '20' }} mb={{ base: '20', sm: '20', md: '20' }}>

      <Stack spacing='10px' mb='10'>
    
      <Center>
          <Box w='100%'>   {/* parte da exposição */}
          <Box>
              <Heading fontSize='20' m='2'>Feed da Exposição <Icon w={4} as={Trophy} /></Heading>
            </Box>
            {CardItens && <CardCarrousel qtdSlide={isLargerThan320 ? (isLargerThan800 ? 3 : 2) : 1} card={CardItens} />}
            <Box align='end'>
              <ReactLink to='/exposicao' ml='0.5'>
                <Flex><Spacer />Mais na exposição, <Text color='red'> clique aqui <Icon as={ExternalLink} /></Text></Flex>
              </ReactLink >
            </Box>
          </Box>
        </Center>

      
        <Center>
          <Box w='100%'>   {/* parte da venda */}
            <Box>
              <Heading fontSize='20' m='2'>Produtos a venda <Icon w={4} as={Storefront} /></Heading>
            </Box>
            <GridLoja />
            <Box align='end'>
              <ReactLink to='/loja' ml='0.5'>
                <Flex><Spacer />Acesse nossa loja, <Text color='red'> clique aqui <Icon as={ExternalLink} /></Text></Flex>
              </ReactLink >
            </Box>
          </Box>
        </Center>


        
      <Center>
          <Box w='100%'>   {/* parte das noticias */}
            <Box>
              <Heading fontSize='20' m='2'>Noticias <Icon w={4} as={Storefront} /></Heading>
            </Box>
            <GridNoticias />
            <Box align='end'>
              <ReactLink to='/noticias' ml='0.5'>
                <Flex><Spacer />Mais Noticias, <Text color='red'> clique aqui <Icon as={ExternalLink} /></Text></Flex>
              </ReactLink >
            </Box>
          </Box>
        </Center>




        <Center>
          <Box w='100%'>   {/* parte da materias */}
            <Box>
              <Heading fontSize='20' m='2'>Materias <Icon w={4} as={Newspaper} /></Heading>
            </Box>
            <GridMaterias />
            <Box align='end'>
              <ReactLink to='/materias' ml='0.5'>
                <Flex><Spacer />Mais Materias, <Text color='red'> clique aqui <Icon as={ExternalLink} /></Text></Flex>
              </ReactLink >
            </Box>
          </Box>
        </Center>



      </Stack>

    </Container>
  );
}

export default Home;