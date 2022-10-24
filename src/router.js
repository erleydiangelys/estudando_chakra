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
import NotFound from './Pages/NotFound/index';
import Materias from './Pages/materias/index';
import Materia from './Components/materia/index';

import { UserContext } from './Context/UserContext';


export const Router = () => {
  const { login } = React.useContext(UserContext);


  return(
    <Routes >
      <Route path="/" element={login ? <Home /> : <LoginForm/>} />
      <Route path="login/" element={login ? <Home /> : <LoginForm/>} />
      <Route path="login/create" element={<LoginCadastro/>} />
      <Route path="loja/" element={login ? <Loja /> :  <LoginForm/>} />
      <Route path="exposicao/" element={login ? <Exposicao /> : <LoginForm/> } />
      <Route path="noticias/" element={login ? <Noticias /> : <LoginForm/>} />
      <Route path="noticias/:id" element={login ? <Noticia /> : <LoginForm/>} />
      <Route path="materias/" element={login ? <Materias /> : <LoginForm/>} />
      <Route path="materias/:id" element={login ? <Materia /> : <LoginForm/>} />
      <Route path="teste/" element={<Teste />} />
      <Route path="*" element={<NotFound />}/>
    </Routes>
)
}

export default Router;