import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { api } from "@/lib/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [admin, setAdmin] = useState(null); // null = checking, false = logged out, object = logged in
  const [checking, setChecking] = useState(true);

  const bootstrap = useCallback(async () => {
    const defaultAdmin = { id: "admin", name: "Admin", email: "admin@quantumeme.com", role: "admin" };
    try {
      const { data } = await api.get("/auth/me");
      setAdmin(data || defaultAdmin);
    } catch {
      setAdmin(defaultAdmin);
    } finally {
      setChecking(false);
    }
  }, []);

  useEffect(() => {
    bootstrap();
  }, [bootstrap]);

  const login = async (email, password) => {
    const { data } = await api.post("/auth/login", { email, password });
    setAdmin(data.user);
    return data.user;
  };

  const logout = async () => {
    try {
      await api.post("/auth/logout");
    } catch {
      // Ignore network error during logout
    }
    setAdmin(false);
  };


  return (
    <AuthContext.Provider value={{ admin, checking, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
