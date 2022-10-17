import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './Pages/Login/LoginForm';
import LoginCadastro from './Pages/Login/LoginCadastro';
import Home from './Pages/Home';

export const Router = () => {
  return(
    <Routes >
      <Route path="/" element={<Home />} />
      <Route path="login/" element={<LoginForm/>} />
      <Route path="login/create" element={<LoginCadastro/>} />
      <Route path="*" />
    </Routes>
)
}

export default Router;