import React from 'react';

import { Grid, GridItem, Box, LinkBox, LinkOverlay, Flex, Image, Text, Heading } from '@chakra-ui/react';

function GridNews() {
  const image = {
    url1: 'https://images.unsplash.com/photo-1518155317743-a8ff43ea6a5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGRvZyUyMHZldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    texto1: 'Leve o dog na viagem',
    url2: 'https://images.unsplash.com/photo-1453227588063-bb302b62f50b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRvZyUyMHZldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    texto2: 'Forte onda de frio tem afetado seu cão? o que fazer!',
    url3: 'https://images.unsplash.com/photo-1611173622933-91942d394b04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHZldGVyaW5hcmlhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    texto3: 'Os beneficios do banho.',
    url4: 'https://images.unsplash.com/photo-1508675801627-066ac4346a61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTF8fGRvZyUyMHZldHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
    texto4: 'Sempre o melhor amigo',
    fallback: 'https://via.placeholder.com/150'
  }


  return ( // depois quero fazer o texto flutuar sobre a imagem ainda nao ta assim
    <Grid
      templateColumns='repeat(3, 1fr)'
      gap={2}
    >
      <GridItem colSpan={{ base: 3, sm: 3, md: 1 }} maxH={{ base: '150px', sm: '150px', md: '200px' }}>
          <Image src={image.url1} width='100%' height='100%' objectFit='cover' />
          <Flex justify={'center'} mt={-4}><Text bg='gray.200' fontWeight='600' fontSize='14' align='center' w='100%'>{image.texto1}</Text></Flex>
      </GridItem>

      <GridItem colSpan={{ base: 3, sm: 3, md: 2 }} maxH={{ base: '150px', sm: '150px', md: '200px' }}>
          <Image src={image.url2} width='100%' height='100%' objectFit='cover' />
          <Flex justify={'center'} mt={-4}><Text bg='gray.200' fontWeight='600' fontSize='14' align='center' w='100%'>{image.texto2}</Text></Flex>
      </GridItem>
          
      <GridItem colSpan={{ base: 3, sm: 3, md: 2 }} maxH={{ base: '150px', sm: '150px', md: '200px' }}>
          <Image src={image.url3} width='100%' height='100%' objectFit='cover' />
          <Flex justify={'center'} mt={-4}><Text bg='gray.200' fontWeight='600' fontSize='14' align='center' w='100%'>{image.texto3}</Text></Flex>
      </GridItem>

      <GridItem colSpan={{ base: 3, sm: 3, md: 1 }} maxH={{ base: '150px', sm: '150px', md: '200px' }}>
          <Image src={image.url4} width='100%' height='100%' objectFit='cover' />
          <Flex justify={'center'} mt={-4}><Text bg='gray.200' fontWeight='600' fontSize='14' align='center' w='100%'>{image.texto4}</Text></Flex>
      </GridItem>
    </Grid>

  );
}

export default GridNews;