import React from 'react';

import { Icon } from '@chakra-ui/react'
import {ExternalLink} from '@styled-icons/heroicons-solid/ExternalLink';

import {Container, Box, Link, Center,Text, Heading, Stack, useMediaQuery} from '@chakra-ui/react'
import CardCarrousel from '../../Components/Carrousel/CardCarrousel';
import GridNews from '../../Components/GridNews';


import cards from '../../Data/dogs-mock.json'
const CardItens = cards.Dogs

function Home() {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')
  const [isLargerThan320] = useMediaQuery('(min-width: 550px)')
  return (
    <Container maxW='1200px' mt={{ base: '2', sm: '2', md: '5' }}>

      <Stack spacing='20px'>

        <Center>
          <Box w='100%'>   {/* parte da exposição */}
            <Box>
              <Heading fontSize='20' m='2'>Newsletter</Heading>
            </Box>
            <GridNews />
            <Box>
              <Text m='3' align='end'>Mais Noticias
                <Link ml='0.5' color='red' variant='ghost'>clique aqui <Icon as={ExternalLink} />
                </Link >
              </Text>
            </Box>
          </Box>
        </Center>

        <Center>
          <Box w='100%'>   {/* parte da exposição */}
          <Box>
              <Heading fontSize='20' m='2'>Feed Exposição</Heading>
            </Box>
            {CardItens && <CardCarrousel qtdSlide={isLargerThan320 ? (isLargerThan800 ? 3 : 2) : 1} card={CardItens} />}
            <Box>
              <Text mb='3' align='end'>Mais na Exposição,
                <Link ml='0.5' color='red' variant='ghost'>
                  venha Conferir <Icon as={ExternalLink} />
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