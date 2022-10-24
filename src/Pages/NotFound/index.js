import React from 'react';
import Lottie from 'react-lottie';
import * as not404 from '../../Assets/json/notFound.json'

import { Container, VStack, Box, Grid, useMediaQuery, Heading } from '@chakra-ui/react';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: not404,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

function NotFound() {
  return (
    <Container maxW='1200px' mt={{ base: '2', sm: '2', md: '5' }}>
      <Heading mt='20vh' align='center' fontFamily='Montserrat'>Page Not found</Heading>
      <Box mt='2'>
        <Lottie options={defaultOptions}
          height={300}
          width={280} />
      </Box>
    </Container>
  );
}

export default NotFound;