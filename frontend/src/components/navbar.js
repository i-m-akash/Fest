import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import img from "../Images/logo.webp";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null); // Initialize as null
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    axios.get('https://pyrexia-backend.onrender.com/login/success', { withCredentials: true })
      .then(response => {
        if (response?.data?.success) {  // Optional chaining
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      })
      .catch(() => {
        setIsLoggedIn(false);  // Ensure fallback to logged-out state on error
      });
  }, []);

  const handleLogout = () => {
    axios.get('https://pyrexia-backend.onrender.com/logout', { withCredentials: true })
      .then(response => {
        if (response?.data?.success) {  // Optional chaining
          setIsLoggedIn(false);
          navigate("/");  // Redirect to home after logout
        }
      })
      .catch(error => {
        console.error("Error during logout:", error);
      });
  };

  const buttonClasses = 'text-gray-100 font-bold text-sm px-2 py-1 border-2 border-gray-100 hover:bg-gray-100 hover:text-gray-800 rounded-lg transition duration-300';

  const loggedInButtons = (
    <>
      <a href="/" className={buttonClasses}>Home</a>
      <a href="/events" className={buttonClasses}>Events</a>
      <a href="/starnight" className={buttonClasses}>Star Night</a>
      <a href="https://drive.google.com/file/d/12CP4PlhrVhJ4Hi_NVYIhn5B-wWi2q3kr/view?usp=drive_link" className={buttonClasses}>Brochure</a>
      <button onClick={handleLogout} className={buttonClasses}>Logout</button>
    </>
  );

  const loggedOutButtons = (
    <>
      <a href="/" className={buttonClasses}>Home</a>
      <a href="/events" className={buttonClasses}>Events</a>
      <a href="/starnight" className={buttonClasses}>Star Night</a>
      <a href="https://drive.google.com/file/d/12CP4PlhrVhJ4Hi_NVYIhn5B-wWi2q3kr/view?usp=drive_link" className={buttonClasses}>Brochure</a>
      <a href="/login" className={buttonClasses}>Login</a>
    </>
  );

  return (
    <nav className='bg-[#001f3f] text-white fixed top-0 left-0 w-full z-30'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex flex-row w-full justify-between'>
            <div className='text-xl font-bold font-sans-serif poppins'>
              <img className='mt-3 w-32 h-auto autoload' src={img} alt="Logo" />
            </div>
            <div className='hidden md:block'>
              <div className='mt-14 flex ml-10 items-baseline space-x-4'>
                {isLoggedIn ? loggedInButtons : loggedOutButtons}
              </div>
            </div>
          </div>
          <div className='md:hidden'>
            <button onClick={() => setIsOpen(!isOpen)} type='button' className='fill-gray-100 mt-2'>
              <svg viewBox="0 0 100 80" width="30" height="30">
                <rect width="100" height="15" rx="10"></rect>
                <rect y="30" width="100" height="15" rx="10"></rect>
                <rect y="60" width="100" height="15" rx="10"></rect>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='flex flex-col gap-y-2 md:hidden px-4 sm:px-6 pb-2'>
          {isLoggedIn ? loggedInButtons : loggedOutButtons}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
