import React from 'react';

// import { Container } from './styles';
import { Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';
import { customScrollbar } from './../../styles/utils';

function HorizontalCard({card}) {
    const {imageUrl, idade, name, sobre, likes, raca } = card
    
    return (
        <Flex  maxW='850px' maxH='400px' borderRadius='8px' bgColor='gray.100'>

            <Image src={imageUrl} alt={name}
                maxW={['200px', '300px', '400px']} maxH={['200px', '300px', '400px']} objectFit='cover' borderLeftRadius='8px' />

            <VStack p='16px' spacing='16px' align='flex-start' maxW='350px' minW='200px' h={['200px', '300px', '400px']}>
                <Text variant='subtitle'>{idade}</Text>

                <Heading size='lg' >{name}</Heading>

                <Text overflowY='auto' css={customScrollbar}>{sobre}</Text>
            </VStack>
        </Flex>
    );
}

export default HorizontalCard;