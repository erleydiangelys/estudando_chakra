//usado no feed noticias

import React from 'react';

import { Flex, Heading, Image, Text, Link, useColorModeValue, Box, Icon } from '@chakra-ui/react';
import {ReadingListAdd} from '@styled-icons/fluentui-system-regular/ReadingListAdd';

import { customScrollbar } from './../../styles/utils';

// const data = {
//     dataPost: '19/10/2022',
//     title: 'Descoberta vacina mais eficiente contra carrapato',
//     imgURL: 'https://images.unsplash.com/photo-1611694449252-02453c27856a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dmFjY2luZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
//     resumo: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at egestas enim. Donec rhoncus ac est ultricies convallis. Duis vitae interdum ipsum. Pellentesque sit amet sodales est, sed porta lorem. Pellentesque sed scelerisque dolor. Donec luctus elementum consectetur. Ut vel leo nisi. Praesent in tristique tellus. Donec sagittis, urna at hendrerit blandit...'

// }

function HorizontalCard({card}) {
    const {dataPost, title, imgURL, resumo} = card
    
    return (
        <Flex direction={{sm:'column', md: 'row'}} position='relative' borderRadius='8px' bgColor={useColorModeValue('gray.100', 'black')}>

            <Image src={imgURL} alt={'img'} w='100%' h='300px' objectFit='cover' borderLeftRadius={{sm:'0', md: '8'}} borderTopRadius={{sm:'8', md: '0'}}/>

            <Box p='16px' spacing='16px'>
                <Box align='end'>
                    <Text variant='subtitle'>{dataPost}</Text>
            </Box>

            <Heading size='md'  mt='4' align='center'>{title}</Heading>

            <Text overflowY='auto' mt='4' mb='8' css={customScrollbar}>{resumo}</Text>

            <Box>
                <Link position='absolute' right='4' bottom='4' color='red.500' href='#'>Continuar lendo<Icon ml='1' as={ReadingListAdd} /></Link>
            </Box>
            </Box>
        </Flex>
    );
}

export default HorizontalCard;