import axios from "axios";
import { createContext, useContext, useState } from "react";

const UsersContext = createContext(null);

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/api/Users");
      setUsers(res.data);
    } catch (err) {
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  const createUser = async (formData) => {
    setLoading(true);
    try {
      const res = await axios.post("/api/Users", formData);
      setUsers((prev) => [...prev, res.data]);
    } catch (err) {
      setError("Failed to create user");
    } finally {
      setLoading(false);
    }
  };

  const getUser = async (id) => {
    setLoading(true);
    try {
      const res = await axios.get(`/api/Users/${id}`);
      return res.data;
    } catch (err) {
      setError("Failed to fetch user");
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async (id, formData) => {
    setLoading(true);
    try {
      const res = await axios.put(`/api/Users/${id}`, formData);
      setUsers((prev) => prev.map((u) => (u.id === id ? res.data : u)));
    } catch (err) {
      setError("Failed to update user");
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`/api/Users/${id}`);
      setUsers((prev) => prev.filter((u) => u.id !== id));
    } catch (err) {
      setError("Failed to delete user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <UsersContext.Provider
      value={{
        users,
        loading,
        error,
        fetchUsers,
        createUser,
        getUser,
        updateUser,
        deleteUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export const useUsers = () => useContext(UsersContext);
