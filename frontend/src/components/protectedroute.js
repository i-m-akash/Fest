import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../BaseUrl';
const ProtectedRoute = ({ element: Element, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${BASE_URL}/login/success`, { withCredentials: true })
      .then(response => {
        if (response.data.success) {
          setIsAuthenticated(true);
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return isAuthenticated ? <Element {...rest} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
