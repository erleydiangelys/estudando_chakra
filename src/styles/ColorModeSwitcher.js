import React from 'react';
import { useColorMode, useColorModeValue, Button, Text } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = (props) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <>
    <Button 
      variant='ghost'
      onClick={toggleColorMode}
      leftIcon={<SwitchIcon size='12'/>}
      >
      <Text fontSize='14'>{props.texto}</Text>
      </Button>
      </>
  );
};
