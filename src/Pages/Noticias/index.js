import React from 'react';

import { Icon } from '@chakra-ui/react'
import {ExternalLink} from '@styled-icons/heroicons-solid/ExternalLink';
import {Newspaper} from '@styled-icons/ionicons-sharp/Newspaper';

import {Container, Box, Link, Center,Text, Heading, Stack, useMediaQuery, Grid} from '@chakra-ui/react'

import HorizontalCard from './../../Components/Card/HorizontalCard';

import noticias from '../../Data/noticias-mock.json'

function Noticias() {

  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')
  const [isLargerThan320] = useMediaQuery('(min-width: 550px)')
  const data = noticias.Noticias

  return (
    <Container maxW='1200px' mt={{ base: '2', sm: '2', md: '5' }}>

      <Stack spacing='10px'>

      <Center>
          <Box w='100%'>   {/* parte da exposição */}
          <Box>
              <Heading fontSize='20' m='2' align='center' mb='5'>Noticias<Icon w={4} as={Newspaper} ml='2' /></Heading>
            </Box>
          <Grid gap='5' m='2'>
          {data.map((not, index) => (
                <HorizontalCard card={not} key={index} />
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

export default Noticias;