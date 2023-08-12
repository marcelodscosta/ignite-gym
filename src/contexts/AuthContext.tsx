import { ReactNode, createContext } from "react";

import { UserDTO } from "@dtos/UserDTO";

type AuthContextDataProps = {
  user: UserDTO;
};

type AuthContextProviderProps = {
  children: ReactNode;
}

export const AuthContext =
  createContext<AuthContextDataProps>({} as AuthContextDataProps);


export function AuthContextProvider({ children }: AuthContextProviderProps) {
  return (
    <AuthContext.Provider value={{
      user: {
        id: '1',
        name: 'Marcelo Costa',
        email: 'marcelodscosta@yahoo.com.br',
        avatar: 'https://github.com.br/marcelodscosta.png',
      }
    }}>
      {children}
    </AuthContext.Provider>
  );
}