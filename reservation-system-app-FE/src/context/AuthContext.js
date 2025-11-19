import React, { createContext, useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "authToken";

function safeParseJwt(token) {
  try {
    const parts = token.split(".");
    if (parts.length < 2) return null;
    const payload = parts[1];
    // base64url -> base64
    const base64 = payload.replace(/-/g, "+").replace(/_/g, "/");
    const padded = base64.padEnd(base64.length + (4 - (base64.length % 4)) % 4, "=");
    const json = atob(padded);
    return JSON.parse(json);
  } catch (e) {
    return null;
  }
}

export const AuthContext = createContext({
  token: null,
  user: null,
  login: () => {},
  logout: () => {},
});

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => {
    try {
      return sessionStorage.getItem(STORAGE_KEY) || null;
    } catch (e) {
      return null;
    }
  });

  const [user, setUser] = useState(() => {
    if (!token) return null;
    return safeParseJwt(token);
  });

  const login = useCallback((newToken) => {
    try {
      sessionStorage.setItem(STORAGE_KEY, newToken);
    } catch (e) {
      // ignore storage errors
    }
    setToken(newToken);
    setUser(safeParseJwt(newToken));
  }, []);

  const logout = useCallback(() => {
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      // ignore
    }
    setToken(null);
    setUser(null);
  }, []);

  // respond to external logout events (axiosInstance will dispatch on 401)
  useEffect(() => {
    const handler = () => logout();
    window.addEventListener("auth:logout", handler);
    return () => window.removeEventListener("auth:logout", handler);
  }, [logout]);

  // on mount, ensure state restored from sessionStorage
  useEffect(() => {
    try {
      const stored = sessionStorage.getItem(STORAGE_KEY);
      if (stored && stored !== token) {
        setToken(stored);
        setUser(safeParseJwt(stored));
      }
    } catch (e) {
      // ignore
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = {
    token,
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
