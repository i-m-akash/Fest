import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../BaseUrl';
const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const query = new URLSearchParams(useLocation().search);
  const email = query.get('email');
  const token = query.get('token');
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/resetpassword`, { email, token, newPassword });
      alert(response.data.message);
      navigate('/login'); // Redirect to login page after successful password reset
    } catch (err) {
      alert(err.response?.data?.error || 'An error occurred');
    }
  };

  return (
    <div>
      <h1>Reset Password</h1>
      <form onSubmit={handleResetPassword}>
        <input type="password" placeholder="New Password" onChange={(e) => setNewPassword(e.target.value)} />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
