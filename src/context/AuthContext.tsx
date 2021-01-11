import React, { createContext } from 'react';

interface AuthContextData {
  name: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData); // assim formçamos a inicialização com objeto vazio

export const AuthProvider: React.FC = ({ children }) => {
  return (
    <AuthContext.Provider value={{ name: 'Eduardo' }}>
      {children}
    </AuthContext.Provider>
  );
};
