import React from 'react'
import { UserContext } from '../../Context/UserContext';
import { Link as ReactLink } from "react-router-dom";

import {
  Icon,
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
  Text,
  Center,
  Image,
  useToast,
  useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { ShoppingCartOutline } from '@styled-icons/evaicons-outline/ShoppingCartOutline';

import { ColorModeSwitcher } from './../../styles/ColorModeSwitcher';

export function Header() {
  const { login, itensCarrinho, descCarrinho, Userlogout } = React.useContext(UserContext);
  const [itens, setItens] = React.useState(0)
  const [descItens, setDescItens] = React.useState([])
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast()


  React.useEffect(() => {
    setItens(itensCarrinho)
    setDescItens(descCarrinho)
  }, [itensCarrinho, descCarrinho]);

  const Links = [{ nome: 'Noticias', link: 'noticias' }, { nome: 'Exposição', link: 'exposicao' },  { nome: 'Materias', link: 'materias' }, { nome: 'Loja', link: 'loja' }];

  const NavLink = ({ children }) => (
    <ReactLink //tive que mudar para o link do react 
      to={children.link}>
      {children.nome}
    </ReactLink>
  );

  const color = useColorModeValue('gray.50', 'black');

  return (
    <>
      {login && 
      (<Box px={4} position='fixed' top='0' w='100%' zIndex='999' bg={color}>
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
                <Heading fontSize={{ md: '20' }}>DOGNEWS</Heading>
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
                {itens ? (
                  <Flex mr='4'>
                    <Icon w='6' h='6' as={ShoppingCartOutline} />
                    <Text color='red'>{itens}</Text>
                  </Flex>) : (<Icon mr='4' w='6' h='6' as={ShoppingCartOutline} />)}
              </MenuButton>
              {descItens.length > 0 && <MenuList zIndex='2'>
                {descItens.length > 0 && descItens.map((item, index) => (
                  <MenuItem key={index} maxW='300px'>
                    <Flex>
                    <Image maxW='80px' src={item.imageURL} />
                    <Text >Produto: {item.name} Preço: {item.price}</Text>
                    </Flex>
                  </MenuItem>
                ))}
                {descItens.length > 0 && <Center>
                  <Button colorScheme='orange' onClick={() =>
                  toast({ title: 'Função não disponivel', description: "Devido o caracter de exibição desse projeto essa função nao foi implementada ainda", status: 'warning', duration: 9000, isClosable: true, size: '300', })}>
                    Finalizar compra
                  </Button>
                </Center>}
              </MenuList>}
            </Menu>

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
              <ReactLink to='/perfil'><MenuItem>Perfil</MenuItem></ReactLink>
                <MenuItem onClick={() => Userlogout()}>Sair</MenuItem>
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
      </Box>)
}
    </>
  );
}

export default Header