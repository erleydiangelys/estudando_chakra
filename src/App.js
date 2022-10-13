import React from 'react';



import {  ChakraProvider } from '@chakra-ui/react';
import theme from './styles/theme';
import { Header } from './Components/Header';
import LoginForm from './Pages/LoginForm';

import Cards from './Pages/Cards/index';

function App() {
  return (
    <ChakraProvider theme={theme}>
        <Header />
      {/* <LoginForm /> */}
      <Cards />

    </ChakraProvider>
  );
}

export default App;
