import React from 'react';
import { redirect } from "react-router-dom";

export const UserContext = React.createContext();

export const UserDataContext = ({ children }) => {

    const [login, setLogin] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);



    return (
        <UserContext.Provider
          value={{ login, loading, error }}
        >
          {children}
        </UserContext.Provider>
      );
}
