import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
    Heading, 
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
  
  
  const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function Footer() {
    return (
      <Box bg={useColorModeValue('gray.50', 'black')} bottom='0' w='100%'>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Heading fontSize={{ md: '20' }}>DOGNEWS</Heading>
          <Text>© 2022 -  Erley Diangelys</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Github'} href={'https://github.com/erleydiangelys'}>
              <FaGithub />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'https://www.instagram.com/erleydiangelys/'}>
              <FaInstagram />
            </SocialButton>
            <SocialButton label={'Twitter'} href={'https://twitter.com/erleydiangelys'}>
              <FaTwitter />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    );
  }