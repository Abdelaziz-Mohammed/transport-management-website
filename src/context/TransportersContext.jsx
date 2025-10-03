import axios from "axios";
import { createContext, useContext, useState } from "react";

const TransportersContext = createContext(null);

export function TransportersProvider({ children }) {
  const [transporters, setTransporters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchTransporters = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/api/Transporters");
      setTransporters(res.data);
    } catch (err) {
      setError("Failed to fetch transporters");
    } finally {
      setLoading(false);
    }
  };

  const createTransporter = async (formData) => {
    setLoading(true);
    try {
      const res = await axios.post("/api/Transporters", formData);
      setTransporters((prev) => [...prev, res.data]);
    } catch (err) {
      setError("Failed to create transporter");
    } finally {
      setLoading(false);
    }
  };

  const updateTransporter = async (id, formData) => {
    setLoading(true);
    try {
      const res = await axios.put(`/api/Transporters/${id}`, formData);
      setTransporters((prev) => prev.map((t) => (t.id === id ? res.data : t)));
    } catch (err) {
      setError("Failed to update transporter");
    } finally {
      setLoading(false);
    }
  };

  const deleteTransporter = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`/api/Transporters/${id}`);
      setTransporters((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      setError("Failed to delete transporter");
    } finally {
      setLoading(false);
    }
  };

  return (
    <TransportersContext.Provider
      value={{
        transporters,
        loading,
        error,
        fetchTransporters,
        createTransporter,
        updateTransporter,
        deleteTransporter,
      }}
    >
      {children}
    </TransportersContext.Provider>
  );
}

export const useTransporters = () => useContext(TransportersContext);
