import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom'
import img from "../Images/logo.webp";
import { BASE_URL } from '../BaseUrl';
const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    axios.get(`${BASE_URL}/login/success`, { withCredentials: true })
      console.log(response)
      .then(response => {
        if (response.data.success) {
          setIsLoggedIn(true);
        }
      })
      .catch(() => {
        setIsLoggedIn(false);
      });
  }, []);

  const handleLogout = () => {
    axios.get(`${BASE_URL}/logout`, { withCredentials: true })
      .then(response => {
        if (response.data.success) {
          setIsLoggedIn(false);
          navigate("/");
        }
      });
  };
  const handleEventClick = () => {
    navigate('/events', { state: { activeEvent: 'All Events' } });
  };
  const buttonClasses = 'text-gray-100  flex justify-center font-bold text-sm px-2 py-1 border-2 border-gray-100 hover:bg-gray-100 hover:text-gray-800 rounded-lg transition duration-300';

  const loggedInButtons = (
    <>
      <Link to="/" className={buttonClasses}>Home</Link>
     <button className={buttonClasses} onClick={()=> handleEventClick()}>Events</button>
      {/* <a href="/profile" className={buttonClasses}>Profile</a> */}
      <Link to="/starnight" className={buttonClasses}>Star Night</Link>
      <a href="https://drive.google.com/file/d/12CP4PlhrVhJ4Hi_NVYIhn5B-wWi2q3kr/view?usp=drive_link" className={buttonClasses}>Brochure</a>
      <Link to="/accomodation" className={buttonClasses}>Accomodation</Link>
      <button onClick={handleLogout} className={buttonClasses}>Logout</button> 
      <Link to="/cart" className={buttonClasses}> &#128722;</Link> 
    </>
  );

  const loggedOutButtons = (
    <>
      <Link to="/" className={buttonClasses}>Home</Link>
      <button className={buttonClasses}onClick={()=> handleEventClick()}>Events</button>
      <Link to="/starnight" className={buttonClasses}>Star Night</Link>
      <a href="https://drive.google.com/file/d/12CP4PlhrVhJ4Hi_NVYIhn5B-wWi2q3kr/view?usp=drive_link" className={buttonClasses}>Brochure</a>
      <Link to="/accomodation" className={buttonClasses}>Accomodation</Link>
      <Link to="/login" className={buttonClasses}>Login</Link> 
      {/* <Link to="/cart" className={buttonClasses}> &#128722;</Link> */}
    </>
  );
  
  return (
    <nav className='bg-[#001f3f] text-white fixed top-0 left-0 w-full z-50 position-fixed'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex flex-row w-full justify-between'>
            <div className='text-xl font-bold font-sans-serif poppins'>
              <img  className='mt-3 w-32 h-auto autoload' src={img} alt="img1" />
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
        <div className='flex flex-col gap-y-2 md:hidden px-4 sm:px-6 pb-2' onClick={() => setIsOpen(!isOpen)}>
          {isLoggedIn ? loggedInButtons : loggedOutButtons}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
