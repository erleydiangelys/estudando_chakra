//usado no feed noticias

import React from 'react';
import { Link} from "react-router-dom";

import { Flex, Heading, Image, Text, useColorModeValue, Box, Icon, Badge } from '@chakra-ui/react';
import { ReadingListAdd } from '@styled-icons/fluentui-system-regular/ReadingListAdd';

import { customScrollbar } from './../../styles/utils';


function HorizontalCard({ card }) {
    const { dataPost, title, imgURL, resumo, id } = card

    return (
        <Flex direction={{ sm: 'column', md: 'row' }} position='relative' borderRadius='8px' bgColor={useColorModeValue('gray.100', 'black')}>

            <Image src={imgURL} alt={'img'} w='100%' maxW={{ md: '30%' }} h='300px' objectFit='cover' borderLeftRadius={{ sm: '0', md: '8' }} borderTopRadius={{ sm: '8', md: '0' }} />

            <Box p='16px' spacing='16px'>
                <Box align='end'>
                    <Text variant='subtitle'>{dataPost}</Text>
                </Box>

                <Heading size='md' mt='4' align='center'>{title}</Heading>

                <Text overflowY='auto' mt='4' mb='8' css={customScrollbar}>{resumo}</Text>

                <Box position='absolute' right='4' bottom='4' color='red.500'>
                    <Link to={`/noticias/${id}`}>Continuar lendo<Icon ml='1' as={ReadingListAdd} /></Link>
                </Box>

            </Box>
        </Flex>
    );
}

export default HorizontalCard;