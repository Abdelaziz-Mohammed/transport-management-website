import { createContext, useContext } from "react";

const VehiclesContext = createContext(null);

export const VehiclesProvider = ({ children }) => {
  return (
    <VehiclesContext.Provider value={{}}>{children}</VehiclesContext.Provider>
  );
};

export const useVehicles = () => useContext(VehiclesContext);
