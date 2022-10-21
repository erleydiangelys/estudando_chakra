import React from 'react';
import { Spinner, Flex } from '@chakra-ui/react'

// import { Container } from './styles';

function Loading() {
  return (
  <Flex justify='center' mt='50vh'>
    <Spinner size='xl'/>
  </Flex>
  );
}

export default Loading;