import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './Pages/Login/LoginForm';
import LoginCadastro from './Pages/Login/LoginCadastro';
import Home from './Pages/Home';
import Loja from './Pages/Loja';
import Noticias from './Pages/Noticias';
import Noticia from './Components/Noticia';
import Exposicao from './Pages/Exposicao/index';
import Teste from './Pages/Teste/index';

export const Router = () => {
  return(
    <Routes >
      <Route path="/" element={<Home />} />
      <Route path="login/" element={<LoginForm/>} />
      <Route path="login/create" element={<LoginCadastro/>} />
      <Route path="loja/" element={<Loja />} />
      <Route path="exposicao/" element={<Exposicao /> } />
      <Route path="noticias/" element={<Noticias />} />
      <Route path="noticias/:id" element={<Noticia />} />
      <Route path="*" />
      <Route path="teste/" element={<Teste />} />
    </Routes>
)
}

export default Router;