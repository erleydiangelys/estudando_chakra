import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Router from './router';
import { UserDataContext } from './Context/UserContext';



import {  ChakraProvider } from '@chakra-ui/react';
import theme from './styles/theme';
import { Header } from './Components/Header';


import Cards from './Pages/Cards/index';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <UserDataContext>
          <Header />
          <Router/>
        </UserDataContext>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
