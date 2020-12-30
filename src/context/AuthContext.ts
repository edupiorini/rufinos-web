import { createContext } from 'react';

interface AuthContextData {
  name: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData); // assim formçamos a inicialização com objeto vazio

export default AuthContext;
