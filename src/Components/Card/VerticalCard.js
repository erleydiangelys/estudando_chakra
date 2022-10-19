//usado no feed exposição

import React from 'react';
import { Flex, Box, VStack, HStack, Tag, Badge, Image, Text, Heading, useColorModeValue } from '@chakra-ui/react';

import { Icon } from '@chakra-ui/react'
import {HeartFill} from '@styled-icons/bootstrap/HeartFill';
import { customScrollbar } from './../../styles/utils';


function VerticalCard({card}) {
   const {imageUrl, idade, name, sobre, likes, raca } = card
  return(
      <Flex direction='column' maxW='450px' maxH='500px' borderRadius='8px' bgColor={useColorModeValue('gray.100', 'black')} m='1'>

          {imageUrl && <Image src={imageUrl} alt={name} 
            w='100%' maxW='450px' h='100%' maxH='220px' objectFit='cover' borderTopRadius='8px'/>}

          <VStack 
                p='16px' spacing='16px' align='flex-start' maxW='450px' minW='200px'
                h='100%' w='100%' overflow='auto'>

          <HStack>
            {idade &&  <Badge colorScheme='orange'>{idade}</Badge>}
            {raca &&  <Badge colorScheme='whatsapp'>{raca}</Badge>}
          </HStack>    

              <Heading size='lg' >{name}</Heading>

              <Text overflow='auto' css={customScrollbar}>{sobre}</Text>

          <Box>
              <Tag variant='solid' colorScheme='red' ><Icon as={HeartFill} mr='2'/> {likes}</Tag>
          </Box>

          </VStack>
      </Flex>
  );
}

export default VerticalCard;