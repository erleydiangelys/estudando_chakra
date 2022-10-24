import React from 'react';
import { useNavigate } from "react-router-dom";

export const UserContext = React.createContext();

export const UserDataContext = ({ children }) => {
  const navigate = useNavigate();
    const [login, setLogin] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [itensCarrinho, setItensCarrinho] = React.useState(0);
    const [descCarrinho, setDescCarrinho] = React.useState([]);


  function Userlogin(name, senha) {
    setLoading(true);
    if((name === 'adm') && (senha === '123')) {
      setTimeout(() => {
        setLoading(false);
        setLogin(true)
        navigate('/')
      }, 1500);
    }
    else {

      setError('usuario ou senha invalido')

      setTimeout(() => {
        setLoading(false);
        setLogin(false)
      }, 2000);
    }
  }

    return (
        <UserContext.Provider
          value={{ login, setLogin, loading, error, Userlogin, itensCarrinho, setItensCarrinho, descCarrinho, setDescCarrinho }}
        >
          {children}
        </UserContext.Provider>
      );
}
