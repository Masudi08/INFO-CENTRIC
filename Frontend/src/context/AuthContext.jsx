import { createContext, useContext, useState, useEffect } from "react";
import { login as loginRequest } from "../api/guestbook";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // On first load, check if a token was saved from a previous session
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      setUser({ username: localStorage.getItem("username") });
    }
    setLoading(false);
  }, []);

  async function login(username, password) {
    const data = await loginRequest(username, password); // { token }
    setToken(data.token);
    setUser({ username });
    localStorage.setItem("token", data.token);
    localStorage.setItem("username", username);
  }

  function logout() {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("username");
  }

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider
      value={{ user, token, isAuthenticated, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}