import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../BaseUrl';
const ForgotPassword = () => {
  const [email, setEmail] = useState('');


  const sendEmail = (e) => {
    e.preventDefault();
    axios.post(`${BASE_URL}/forgotpassword`, { email })
        .then(response => {
            console.log(response);
            alert("Password Reset Email Sent")          
        })
        .catch(err => {
            console.error(err);
            alert( err.response?.data?.error || 'An error occurred');
        });
        
};

return (<div className='flex items-center justify-center min-h-screen bg-gray-100'>
  <div className='bg-white shadow-lg rounded-lg p-8 max-w-md w-full'>
    <h1 className='text-3xl text-center mb-6 font-sans poppins font-semibold animate-bounce'>Forgot Password</h1>
    <form onSubmit={sendEmail} className='flex flex-col space-y-4'>
      <input
        type='email'
        placeholder='Email'
        onChange={(e) => setEmail(e.target.value)}
        className='p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 '
      />
      <button
        type='submit'
        className='bg-[#083765] text-white py-2 px-4 rounded-md hover:bg-pink-300 hover:bg-gradient-to-t from-blue-800 via-blue-500 to-navy-700 hover:bg-gradient-to-t from-blue-800 via-blue-500 to-navy-700 transition-all'
      >
        Submit
      </button>
    </form>
  </div>
</div>
);
};

export default ForgotPassword;
