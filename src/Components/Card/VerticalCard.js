import { Flex, VStack, Image, Text, Heading } from '@chakra-ui/react';
import React from 'react';
import { customScrollbar } from './../../styles/utils';


function VerticalCard({card}) {
   const {image, publishDate, title, content } = card
  return(
      <Flex direction='column' maxW='450px' maxH='500px' borderRadius='8px' bgColor='gray.100' m='2'>

          {image && <Image src={image.url} alt={image.alt} 
            w='100%' maxW='450px' h='100%' maxH='220px' objectFit='cover' borderTopRadius='8px'/>}

          <VStack 
                p='16px' spacing='16px' align='flex-start' maxW='450px' minW='200px'
                h='100%' w='100%' overflow='auto'>

              {publishDate &&  <Text variant='subtitle'>{publishDate}</Text> }

              <Heading size='lg' >{title}</Heading>

              <Text overflow='auto' css={customScrollbar}>{content}</Text>

          </VStack>
      </Flex>
  );
}

export default VerticalCard;