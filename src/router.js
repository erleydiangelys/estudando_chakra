import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './Pages/LoginForm';

export const Router = () => {
  return(
    <Routes >
      <Route path="/" element={<LoginForm/>} />
      <Route path="login/" element={<LoginForm/>} />
      <Route path="*" />
    </Routes>
)
}

export default Router;