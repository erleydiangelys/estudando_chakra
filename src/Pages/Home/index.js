import React from 'react';

import { Icon } from '@chakra-ui/react'
import {ExternalLink} from '@styled-icons/heroicons-solid/ExternalLink';
import {Newspaper} from '@styled-icons/ionicons-sharp/Newspaper';
import {Trophy} from '@styled-icons/icomoon/Trophy';
import {Storefront} from '@styled-icons/ionicons-sharp/Storefront';

import {Container, Box, Link, Center,Text, Heading, Stack, useMediaQuery} from '@chakra-ui/react'
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
    <Container maxW='1200px' mt={{ base: '2', sm: '2', md: '5' }}>

      <Stack spacing='10px'>


    
      <Center>
          <Box w='100%'>   {/* parte da exposição */}
          <Box>
              <Heading fontSize='20' m='2'>Feed da Exposição <Icon w={4} as={Trophy} /></Heading>
            </Box>
            {CardItens && <CardCarrousel qtdSlide={isLargerThan320 ? (isLargerThan800 ? 3 : 2) : 1} card={CardItens} />}
            <Box>
              <Text mb='3' align='end'>Mais na Exposição,
                <Link href='/exposicao' ml='0.5' color='red' variant='ghost'>
                  venha Conferir <Icon as={ExternalLink} />
                </Link >
              </Text>
            </Box>
          </Box>
        </Center>

      
        <Center>
          <Box w='100%'>   {/* parte da venda */}
            <Box>
              <Heading fontSize='20' m='2'>Produtos a venda <Icon w={4} as={Storefront} /></Heading>
            </Box>
            <GridLoja />
            <Box>
              <Text m='3' align='end'>Acesse nossa loja,
                <Link href='/materias' ml='0.5' color='red' variant='ghost'>clique aqui <Icon as={ExternalLink} />
                </Link >
              </Text>
            </Box>
          </Box>
        </Center>


        
      <Center>
          <Box w='100%'>   {/* parte das noticias */}
            <Box>
              <Heading fontSize='20' m='2'>Noticias <Icon w={4} as={Storefront} /></Heading>
            </Box>
            <GridNoticias />
            <Box>
              <Text m='3' align='end'>Mais noticias,
                <Link href='/materias' ml='0.5' color='red' variant='ghost'>clique aqui <Icon as={ExternalLink} />
                </Link >
              </Text>
            </Box>
          </Box>
        </Center>




        <Center>
          <Box w='100%'>   {/* parte da materias */}
            <Box>
              <Heading fontSize='20' m='2'>Materias <Icon w={4} as={Newspaper} /></Heading>
            </Box>
            <GridMaterias />
            <Box>
              <Text m='3' align='end'>Mais Materias,
                <Link href='/materias' ml='0.5' color='red' variant='ghost'>clique aqui <Icon as={ExternalLink} />
                </Link >
              </Text>
            </Box>
          </Box>
        </Center>



      </Stack>

    </Container>
  );
}

export default Home;