import React from 'react'
import { UserContext } from '../../Context/UserContext';

import {
  Box,
  LinkBox,
  LinkOverlay,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
  Tooltip,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import { ColorModeSwitcher } from './../../styles/ColorModeSwitcher';

export function Header() {
  const {login } = React.useContext(UserContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

 
  const Links = [{nome: 'Noticias', link: 'noticias' }, {nome: 'Exposição', link: 'exposicao' }, {nome: 'Loja', link: 'loja' }];
  
  const NavLink = ({ children } ) => (
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={children.link}>
      {children.nome}
    </Link>
  );

  return (
    <>
      <Box  px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
          <Tooltip hasArrow label='voltar para o inicio' fontSize='12'>
            <LinkBox >
            <LinkOverlay href='/'></LinkOverlay>
            <Heading fontSize={{ md: '20'}}>DOGNEWS</Heading>
            </LinkBox >
          </Tooltip>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link, index) => (
                <NavLink key={index}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
          <ColorModeSwitcher />
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://i.pravatar.cc/300'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Perfil</MenuItem>
                <MenuItem>Meus Dogs</MenuItem>
                {/* <MenuDivider /> */}
                <MenuItem>Sair</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
            {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
  }

  export default Header