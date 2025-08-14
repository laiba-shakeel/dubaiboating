// contexts/AuthContext.js
import React, { createContext, useEffect, useState } from "react";
import { getUser, storeUser, removeUser } from "../Helpers/authStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // App start hote hi AsyncStorage se user load karo
    const loadUser = async () => {
      const storedUser = await getUser();
      if (storedUser) setUser(storedUser);
      setLoading(false);
    };
    loadUser();
  }, []);

  const login = async (userData) => {
    await storeUser(userData);
    setUser(userData);
  };

  const register = async (userData) => {
    await storeUser(userData);
    setUser(userData);
  };

  const logout = async () => {
    await removeUser();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
