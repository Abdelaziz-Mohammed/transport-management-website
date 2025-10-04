import { createContext, useContext } from "react";

const DirectionsContext = createContext(null);

export const DirectionsProvider = ({ children }) => {
  return (
    <DirectionsContext.Provider value={{}}>
      {children}
    </DirectionsContext.Provider>
  );
};

export const useDirections = () => useContext(DirectionsContext);
