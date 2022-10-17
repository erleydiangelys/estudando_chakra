import React from 'react';

import { Grid, GridItem, Box, HStack, Image, Text, VStack } from '@chakra-ui/react';

function GridNews() {
  const image = {
    url: 'https://plus.unsplash.com/premium_photo-1663039950073-187c977da2e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE1fHxkb2d8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    fallback: 'https://via.placeholder.com/150'
  }


  return (
    <Grid
      h='200px'
      templateColumns='repeat(3, 1fr)'
      gap={2}
    >
      <GridItem colSpan={{sm:3, md:1}} bg='papayawhip' />
      <GridItem colSpan={{sm:3, md:1}} bg='papayawhip' />
      <GridItem colSpan={{sm:3, md:1}} bg='tomato' />
    </Grid>



      // <Box bg='red' borderRadius='8px'>
      //     <HStack maxW='150'>
      //       <Image src={image.url} width='100%' height='100%' objectFit='cover' fallbackSrc={image.fallback}/>
      //         <Text>teste</Text>
      //     </HStack>
      // </Box >

      // <Box bg='red' borderRadius='8px'>
      //     <HStack maxW='150'>
      //       <Image src={image.url} width='100%' height='100%' objectFit='cover' fallbackSrc={image.fallback}/>
      //         <Text>teste</Text>
      //     </HStack>
      // </Box >

  );
}

export default GridNews;