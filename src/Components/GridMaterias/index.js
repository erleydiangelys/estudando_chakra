import React from 'react';

import { Grid, GridItem, Box, Link, useColorModeValue, Badge, Image, Text, Heading } from '@chakra-ui/react';

function GridMaterias() {
  const image = {
    url1: 'https://images.unsplash.com/photo-1518155317743-a8ff43ea6a5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGRvZyUyMHZldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    texto1: 'Levar o dog na viagem, fará dele mais sociavel',
    url2: 'https://images.unsplash.com/photo-1453227588063-bb302b62f50b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRvZyUyMHZldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    texto2: 'Forte onda de frio tem afetado seu cão? o que fazer!',
    url3: 'https://images.unsplash.com/photo-1611173622933-91942d394b04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHZldGVyaW5hcmlhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    texto3: 'Os beneficios do banho regular para a saúde do seu dog',
    url4: 'https://images.unsplash.com/photo-1508675801627-066ac4346a61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTF8fGRvZyUyMHZldHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
    texto4: 'Sempre o melhor amigo!',
    fallback: 'https://via.placeholder.com/150'
  }


  return (
    <Grid
      templateColumns='repeat(3, 1fr)'
      gap={2}
    >
      <GridItem colSpan={{ base: 3, sm: 3, md: 1 }} maxH={{ base: '150px', sm: '150px', md: '200px' }} position="relative">
        <Link href='#'>
          <Badge position="absolute" right='1' top='1'>click para ler +</Badge>
          <Image src={image.url1} width='100%' height='100%' objectFit='cover' borderRadius='5' />
          <Box justify={'center'} position="absolute" bottom='0' w='100%'>
            <Text fontFamily='Montserrat' p='1' borderBottomRadius='5' bgColor={useColorModeValue('red.300', 'red.900')} fontWeight='600' fontSize='14' align='center'>{image.texto1}</Text>
          </Box>
        </Link>
      </GridItem>

      <GridItem colSpan={{ base: 3, sm: 3, md: 2 }} maxH={{ base: '150px', sm: '150px', md: '200px' }} position="relative">
        <Link href='#'>
          <Badge position="absolute" right='1' top='1'>click para ler +</Badge>
          <Image src={image.url2} width='100%' height='100%' objectFit='cover' borderRadius='5' />
          <Box justify={'center'} position="absolute" bottom='0' w='100%'>
            <Text p='1' borderBottomRadius='5' bgColor={useColorModeValue('green.100', 'green.900')} fontWeight='600' fontSize='14' align='center'>{image.texto2}</Text>
          </Box>
        </Link>
      </GridItem>

      <GridItem colSpan={{ base: 3, sm: 3, md: 2 }} maxH={{ base: '150px', sm: '150px', md: '200px' }} position="relative">
        <Link href='#'>
          <Badge position="absolute" right='1' top='1'>click para ler +</Badge>
          <Image src={image.url3} width='100%' height='100%' objectFit='cover' borderRadius='5' />
          <Box justify={'center'} position="absolute" bottom='0' w='100%'>
            <Text p='1' borderBottomRadius='5' bgColor={useColorModeValue('blue.100', 'blue.900')} fontWeight='600' fontSize='14' align='center'>{image.texto3}</Text>
          </Box>
        </Link>
      </GridItem>

      <GridItem colSpan={{ base: 3, sm: 3, md: 1 }} maxH={{ base: '150px', sm: '150px', md: '200px' }} position="relative">
        <Link href='#'>
          <Badge position="absolute" right='1' top='1'>click para ler +</Badge>
          <Image src={image.url4} width='100%' height='100%' objectFit='cover' borderRadius='5' />
          <Box justify={'center'} position="absolute" bottom='0' w='100%'>
            <Text p='1' borderBottomRadius='5' bgColor={useColorModeValue('yellow.100', 'yellow.900')} fontWeight='600' fontSize='14' align='center'>{image.texto4}</Text>
          </Box>
        </Link>
      </GridItem>
    </Grid>

  );
}

export default GridMaterias;