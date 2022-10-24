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
      setLogin(true)
      setLoading(false)
      navigate('/')
    }
    else {
      setError('usuario ou senha invalido')
      setLoading(false)
      setLogin(false)
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
