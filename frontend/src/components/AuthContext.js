import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../BaseUrl';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/login/success`, { withCredentials: true });
        setIsAuthenticated(response.data.success);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
