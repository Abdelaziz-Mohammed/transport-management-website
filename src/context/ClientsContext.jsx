import { createContext, useContext } from "react";

const ClientsContext = createContext(null);

export const ClientsProvider = ({ children }) => {
  return (
    <ClientsContext.Provider value={{}}>{children}</ClientsContext.Provider>
  );
};

export const useClients = () => useContext(ClientsContext);
