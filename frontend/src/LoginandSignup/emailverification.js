import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation} from 'react-router-dom';
import { BASE_URL } from '../BaseUrl';
const EmailVerification = () => {
  const [message, setMessage] = useState('');
  const query = new URLSearchParams(useLocation().search);
  const email = query.get('email');
  const token = query.get('token');


  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axios.post(`${BASE_URL}/emailverification`, { email, token });
        setMessage(response.data.message);
      } catch (err) {
        setMessage(err.response?.data?.error || 'An error occurred');
      }
    };

    if (email && token) {
      verifyEmail();
    } else {
      setMessage('Invalid verification link');
    }
  }, [email, token]);

  return (
    <div className='flex  mt-24 flex-col items-center justify-center min-h-screen bg-gray-100 p-6'>
    <div className='bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center'>
      <h1 className='text-4xl font-semibold mb-4 text-[#001f3f] '>Email Verification</h1>
      <h2 className='text-lg mb-6 text-[#001f3f] '>{message}</h2>
      {message === "Email verified" && (
        <a href='/login' className='text-navy-500 hover:underline text-lg font-medium'>
          Login
        </a>
      )}
    </div>
  </div>
);
};

export default EmailVerification;
