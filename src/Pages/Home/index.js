import React from 'react';

import { Icon } from '@chakra-ui/react'
import {ExternalLink} from '@styled-icons/heroicons-solid/ExternalLink';

import {Container, Box, Link, Center,Text, VStack, Stack, useMediaQuery} from '@chakra-ui/react'
import CardCarrousel from '../../Components/Carrousel/CardCarrousel';
import GridNews from '../../Components/GridNews';


import cards from '../../Data/dogs-mock.json'
const CardItens = cards.Dogs

function Home() {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')
  const [isLargerThan320] = useMediaQuery('(min-width: 550px)')
  return (
    <Container maxW='1200px' mt='10'>

      <Stack spacing='30px'>

        <Center>
          <Box w='100%'>   {/* parte da exposição */}
            <Box>
              <Text ml='5'>Teste</Text>
            </Box>
            <GridNews />
          </Box>
        </Center>

        <Center>
          <Box w='100%'>   {/* parte da exposição */}
            <Box>
              <Text ml='5'>Temos muitos Doguinhos na exposição,
                <Link p='0.5' color='red' variant='ghost'>
                  Venha Conferir <Icon as={ExternalLink} />
                </Link >
              </Text>
            </Box>
            {CardItens && <CardCarrousel qtdSlide={isLargerThan320 ? (isLargerThan800 ? 3 : 2) : 1} card={CardItens} />}
          </Box>
        </Center>

      </Stack>

    </Container>
  );
}

export default Home;