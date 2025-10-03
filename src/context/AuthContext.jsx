import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser({ token });
    }
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    setError("");

    try {
      const res = await axios.post("/api/Auth/login", { email, password });
      const { token } = res.data;
      localStorage.setItem("token", token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setUser({ email, token });
    } catch (err) {
      setError(
        (err.response?.data?.message || "Login failed") + ", Please try again"
      );
    } finally {
      setLoading(false);
      setTimeout(() => setError(""), 10000);
    }
  };

  const register = async (formData) => {
    setLoading(true);
    setError("");

    try {
      await axios.post("/api/Auth/register", formData);
    } catch (err) {
      console.log(err);

      setError(
        (err.response?.data?.message || "Register failed") +
          ", Please try again"
      );
    } finally {
      setLoading(false);
      setTimeout(() => setError(""), 10000);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
    setUser(null);
  };

  const forgotPassword = async (email) => {
    setLoading(true);
    setError("");

    try {
      await axios.post("/api/Auth/forget-password", { email });
    } catch (err) {
      setError(
        (err.response?.data?.message || "Forgot password failed") +
          ", Please try again"
      );
    } finally {
      setLoading(false);
      setTimeout(() => setError(""), 10000);
    }
  };

  const resetPassword = async (token, newPassword, confirmPassword) => {
    setLoading(true);
    setError("");

    try {
      await axios.post("/api/Auth/reset-password", {
        token,
        newPassword,
        confirmPassword,
      });
    } catch (err) {
      setError(
        (err.response?.data?.message || "Reset password failed") +
          ", Please try again"
      );
    } finally {
      setLoading(false);
      setTimeout(() => setError(""), 10000);
    }
  };

  const confirmEmail = async (token) => {
    setLoading(true);
    setError("");

    try {
      await axios.get(`/api/Auth/confirm-email`, {
        params: { token },
      });
      return true;
    } catch (err) {
      setError(
        (err.response?.data?.message || "Email confirmation failed") +
          ", Please try again"
      );
      return false;
    } finally {
      setLoading(false);
      setTimeout(() => setError(""), 10000);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        login,
        register,
        logout,
        forgotPassword,
        resetPassword,
        confirmEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
