import { createContext, useContext } from "react";

export const AuthContext = createContext({}); // * Contexto de autenticação

function AuthProvider({ children }) {
  return (
    <AuthContext.Provider value={{ email: "jhonatancaetano14@hotmail.com" }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
