import { createContext, useContext } from "react";

const TripsContext = createContext(null);

export const TripsProvider = ({ children }) => {
  return <TripsContext.Provider value={{}}>{children}</TripsContext.Provider>;
};

export const useTrips = () => useContext(TripsContext);
