import React from 'react'
import { UserContext } from '../../Context/UserContext';
import { Link as ReactLink } from "react-router-dom";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
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
    <ReactLink //tive que mudar para o link do react 
      to={children.link}>
      {children.nome}
    </ReactLink>
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
            <ReactLink to='/' >
            <Heading fontSize={{ md: '20'}}>DOGNEWS</Heading>
            </ReactLink >
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
              <MenuList zIndex='999'>
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
            {Links.map((link, index) => (
                <NavLink key={index}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
  }

  export default Header