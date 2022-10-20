//usado no feed exposição

import React from 'react';
import { Flex, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Button, ModalFooter, Box, VStack, HStack, Tag, Badge, Image, Text, Heading, useColorModeValue, useDisclosure } from '@chakra-ui/react';

import { Icon } from '@chakra-ui/react'
import {HeartFill} from '@styled-icons/bootstrap/HeartFill';
import {ResizeFullScreen} from '@styled-icons/entypo/ResizeFullScreen';
import { customScrollbar } from './../../styles/utils';

const text = 'Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.'

function VerticalCard({card}) {
   const {imageUrl, idade, name, sobre, likes, raca } = card
   const { isOpen, onOpen, onClose } = useDisclosure()

  return(
    <>
      <Flex direction='column' position="relative" maxW='450px' maxH='500px' borderRadius='8px' bgColor={useColorModeValue('gray.100', 'black')} m='1'>
          <Tag  position="absolute" size="10px" p='1' right='1' top='1' rounded="full" borderRadius='8px' bgColor='white.50'  onClick={onOpen}>
          <Icon as={ResizeFullScreen} color='black' w='3 ' h='3'/>
          </Tag>
          
          <Image src={imageUrl} alt={name}  onClick={onOpen} 
            w='100%' maxW='450px' h='100%' maxH='220px' objectFit='cover' borderTopRadius='8px'/>

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
    
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Badge colorScheme='red' mr='2'>{name}</Badge>
            <Badge colorScheme='orange' mr='2'>{idade}</Badge>
            <Badge colorScheme='whatsapp' mr='2'>{raca}</Badge>
            </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Image src={imageUrl} alt={name} />
          </ModalBody>

          <ModalFooter>
            <Tag variant='solid' colorScheme='red' ><Icon as={HeartFill} mr='2'/> {likes}</Tag>
          </ModalFooter>
        </ModalContent>
      </Modal>
    
    </>
  );
}

export default VerticalCard;