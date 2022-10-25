import React from 'react';

import { Icon } from '@chakra-ui/react'
import { ExternalLink } from '@styled-icons/heroicons-solid/ExternalLink';
import { Newspaper } from '@styled-icons/ionicons-sharp/Newspaper';

import { Container, Box, Link, Center, Text, Heading, Stack, useMediaQuery, Grid, GridItem } from '@chakra-ui/react'

import HorizontalCard from './../../Components/Card/HorizontalCard';

import { Trophy } from '@styled-icons/icomoon/Trophy';
import { Podium } from '@styled-icons/ionicons-sharp/Podium';
import { CheckCircle } from '@styled-icons/boxicons-solid/CheckCircle';

import VerticalCard from './../../Components/Card/VerticalCard';
import CardCarrousel from '../../Components/Carrousel/CardCarrousel';

import cards from '../../Data/dogs-mock.json'
import dogs from '../../Data/dogs-mock.json'
const dog1 = dogs.Dogs[0]
const dog2 = dogs.Dogs[1]
const dog3 = dogs.Dogs[5]

const CardItens = cards.Dogs



function Exposicao() {

  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')
  const [isLargerThan320] = useMediaQuery('(min-width: 550px)')

  return (
    <Container maxW='1200px' mt={{ base: '20', sm: '20', md: '20' }} mb={{ base: '20', sm: '20', md: '20' }}>

      <Stack spacing='10px'>

        <Center>
          <Box w='100%'>   {/* parte da exposição */}
            <Box>
              <Heading fontSize='20' m='2' align='center' mb='5'>Exposição<Icon w={4} as={Trophy} ml='2' /></Heading>
            </Box>

            <Box>
              <Heading fontSize='16' m='2' align='start'>Podio<Icon w={3} as={Podium} ml='1' /></Heading>

              <Center>
                <Grid templateColumns={{ base: '1fr', sm: '1fr', md: 'repeat(3, 1fr)' }} gap={2}>
                  <GridItem>
                    <Box bg='yellow.400' p='2' borderRadius='lg'>
                      <Heading fontSize='12' m='2' align='center'>Doguinho medalha de ouro</Heading>
                      <VerticalCard card={dog1} isVotar={false} />
                    </Box>
                  </GridItem>

                  <GridItem>
                    <Box bg='gray.400' p='2' borderRadius='lg'>
                      <Heading fontSize='12' m='2' align='center'>Doguinho medalha de Prata</Heading>
                      <VerticalCard card={dog2} isVotar={false} />
                    </Box>
                  </GridItem>

                  <GridItem>
                    <Box bg='yellow.600' p='2' borderRadius='lg'>
                      <Heading fontSize='12' m='2' align='center'>Doguinho medalha de Bronze</Heading>
                      <VerticalCard card={dog3} isVotar={false} />
                    </Box>
                  </GridItem>
                </Grid>
              </Center>
            </Box>
            <Box>
            </Box>
          </Box>
        </Center>

        <Center>
          <Box w='100%'>
            <Heading fontSize='16' mt='10' align='start'>Vote<Icon w={3} as={CheckCircle} ml='1' /></Heading>

            {CardItens && <CardCarrousel qtdSlide={isLargerThan320 ? (isLargerThan800 ? 3 : 2) : 1} card={CardItens} />}
          </Box>

        </Center>

      </Stack>

    </Container>
  );
}

export default Exposicao;