import { createContext } from 'react';

interface AuthContext {
  name: string;
}

const authContext = createContext<AuthContext>({} as AuthContext); // assim formçamos a inicialização com objeto vazio

export default authContext;
