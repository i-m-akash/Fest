import React from 'react';
import video1 from '../Images/Trailer Clip final.mp4';
import { useNavigate } from 'react-router-dom';
import Slider1 from "../Animation/slider.js";
import CountdownTimer from './timer';
import About from './about';
import HomeEvent from './HomeEvent';
import HomeEvent2 from './HomeEvent2';
// import  ProfMessage from './ProfMessage.js';
import Footer from './footer';
import LeftVideoAnimation from '../Animation/LeftVideoAnimation.js';

import FAQ from './FAQ.js'
import EventSchedule from './EventSchedule.js';
const Home = () => {
  const navigate = useNavigate();
 

  const handleNavigate1 = () => {
      navigate('/basic-registration');
      
  };
  const handleNavigate2 = () => {
    navigate('/events');
  }
  return (
    <div className="relative w-full min-h-screen">
      {/* Navbar */}
      <div className='relative z-20'>
        
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen overflow-hidden font-sans-serif poppins">
        {/* Left Video Animation */}
        <div className="relative w-full my-auto ">
          <LeftVideoAnimation
            videoSrc={video1}
            videoAlt="Sample Video"
            videoClasses="mx-auto lg:w-[70%] md:w-[60%] w-[100%] min-h-screen mt-6 md:mt-20"
          />
          {/* Text and Buttons */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 top-1/3 lg:top-0">
            <div className="relative font-bold text-center text-3xl md:text-5xl lg:text-6xl lg:text-left lg:absolute lg:left-[10%] lg:transform lg:-translate-y-1/2">
              <span className="lg:block pb-4">Pyrexia</span>
              <span className="lg:block"> Awaits</span>
              {/* <span className="block">Awaits</span> */}
            </div>
            <div className="flex flex-col items-center gap-4 mt-8 lg:mt-12 lg:flex-row lg:items-start lg:absolute md:bottom-16 lg:left-[10%]">
              <button className="bg-[#001f3f] text-xl border-2 border-gray-100 font-bold py-3 px-5  hover:text-gray-800 rounded-lg transition duration-300 hover:bg-gray-100 hover:bg-gradient-to-t from-blue-800 via-blue-500 to-navy-700" onClick={handleNavigate1} >
                Basic Registration
              </button>

              <button className="bg-[#001f3f] text-xl border-2 border-gray-100 font-bold py-3 px-5 hover:bg-gray-100 hover:text-gray-800 rounded-lg transition duration-300 hover:bg-gradient-to-t from-blue-800 via-blue-500 to-navy-700" onClick={handleNavigate2}>
                Event Registration
              </button>
            </div>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className='justify-center'>
          <CountdownTimer />
        </div>

        {/* Other Components */}
        <div><About /></div>
        <div><HomeEvent /></div>
        <div><HomeEvent2 /></div>

        
        <div className='py-4 bg-black'> <FAQ/></div>
        <div className='py-4 bg-black'> <EventSchedule/></div>
<div className='relative z-10  bg-gradient-to-b from-black to-[#001f3f] pt-10 pb-16 '> 
              < Slider1/>
            </div>

        {/* Footer */}
        <div className="bg-[#001f3f]">
          <Footer />
        </div>
      
      </div>
    </div>
  );
};

export default Home;
