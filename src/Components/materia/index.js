import React from 'react';
import { useParams, Link as ReactLink } from "react-router-dom";
import { LoremIpsum } from 'react-lorem-ipsum';

import { Container, Hide , Breadcrumb, BreadcrumbItem, BreadcrumbLink, Box, Grid, GridItem, Image, Heading, Text, Badge } from '@chakra-ui/react';

import materias from '../../Data/materias-mock.json'

function Materia() {
    let { id } = useParams();
    const data = materias.Materias[id - 1]

  return (
    <Container maxW='1200px' mt={{ base: '2', sm: '2', md: '5' }}>

    {/* <Hide  above ='md'> */}
          {console.log(data)}
          <Breadcrumb mb='3'>
              <BreadcrumbItem>
                  <ReactLink to='/'>Inicio</ReactLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                  <ReactLink to='/materias'>materias</ReactLink>
              </BreadcrumbItem>
          </Breadcrumb>
    {/* </Hide > */}
        
        <Heading fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }} align='center' mb='8'>{data.title}</Heading>

      <Grid templateColumns={{ base: '1fr', sm: '1fr', md: 'repeat(2, 1fr)' }} gap='5'>
        <GridItem mb='5'>
            <Image src={data.imgURL} w='100%' h='100%' objectFit='cover'/>
            <Badge colorScheme='orange'>Autor: {data.autor}</Badge>
            <Badge colorScheme='green' ml='2'>Data: {data.dataPost}</Badge>
        </GridItem>

        <GridItem>
           <Text>{data.resumo}<LoremIpsum p={2} /></Text>
        </GridItem>
      </Grid>

    <Box>
    </Box>
    </Container>
  );
}

export default Materia;