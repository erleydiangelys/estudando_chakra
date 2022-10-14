import React from 'react'

import { Flex, Spacer, Box, Image, Heading, Center } from '@chakra-ui/react'
import { ColorModeSwitcher } from './../../styles/ColorModeSwitcher';

export function Header() {

  const img = {
    imgURL: 'https://sso.acesso.gov.br/assets/govbr/img/govbr.png'
  }
  
    return (
      <Flex pl='2' p='2' mt='0' align='center' boxShadow='sm' rounded='md'>
          <Box  maxW='1200px'>
           {/* <Image maxW='100px' src={img.imgURL}/> */}
           <Heading fontSize='28'>DOGNEWS</Heading>
          </Box>
          <Spacer />
          <Box>
            <ColorModeSwitcher texto='Alto Contraste'/>
          </Box>
    </Flex>
    )
  }

  export default Header