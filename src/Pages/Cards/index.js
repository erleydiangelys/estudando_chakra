import React from 'react';

import { Center, VStack, Box, Grid, useMediaQuery  } from '@chakra-ui/react';

import HorizontalCard from '../../Components/Card/HorizontalCard';
import VerticalCard from '../../Components/Card/VerticalCard';

import cards from '../../components-mock.json'
import CardCarrousel from '../../Components/Carrousel/CardCarrousel';

// import { Container } from './styles';
const horizontal_cards = cards.horizontal_cards;
const vertical_cards = cards.cards;
const cards_carrousel = cards.cards_carrousel;

function Cards() {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')
  const [isLargerThan320] = useMediaQuery('(min-width: 550px)')

  return (
    <Center>
      <Box maxW='1280'>
        <VStack  spacing="64px">

              {/* {horizontal_cards.map((Horizontal_Card, index) => (
                  <HorizontalCard key={index} card={Horizontal_Card} />
                ))} */}
          <Grid templateColumns={['1fr', '1fr', '1fr', 'repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap='2px'>
          {vertical_cards.map((vertical_Card, index) => (
                  <VerticalCard key={index} card={vertical_Card} />
                ))} 
          </Grid>

        </VStack>
         
        <Box maxW='100vw'>
          {cards_carrousel && <CardCarrousel qtdSlide={isLargerThan320 ? (isLargerThan800 ? 3 : 2) : 1} card={cards_carrousel} />}
        </Box>

      </Box>
    
    </Center>

    
  );
}

export default Cards;