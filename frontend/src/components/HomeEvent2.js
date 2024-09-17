import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alfresco from '../Images/Revealing soon (5).PNG';
import Kalakriti from '../Images/Revealing soon (6).PNG';
import Littmania from '../Images/Revealing soon (3).PNG';
import Solasta from '../Images/Revealing soon (2).PNG';
import Velocity from '../Images/Revealing soon (1).PNG';
import Thunderbolt from '../Images/Revealing soon.PNG';

// Define your images and titles
const images = {
  Alfresco: Alfresco,
  Kalakriti: Kalakriti,
  Littmania: Littmania,
  Solasta: Solasta,
  Velocity: Velocity,
  Thunderbolt: Thunderbolt,
};

// Default background image for unselected state
const defaultBgImage = Alfresco;

const HomeEvent2 = () => {
  const [selectedEvent, setSelectedEvent] = useState('Alfresco');
  const [bgImage, setBgImage] = useState(defaultBgImage);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setSelectedEvent(event);
    setBgImage(images[event]);
  };

  const handleNameClick = () => {
    navigate("/starnight");
  };

  return (
    <div
      className="relative  bg-gradient-to-t from-black to-[#001f3f] items-center justify-center  overflow-hidden"
    >
      {/* Star Section */}
      <div className="w-full pt-10">
        <div className="flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none" // Transparent fill
            stroke="white" // White border
            strokeWidth="1" // Border width
            className="w-24 h-24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
          <div
            className="text-xl md:text-4xl font-semibold mx-10 text-white animate-pulse cursor-pointer"
            onClick={()=>handleNameClick()}
          >
            Star Night
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none" // Transparent fill
            stroke="white" // White border
            strokeWidth="1" // Border width
            className="w-24 h-24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="relative mt-28 mb-24 flex items-center justify-center cursor-pointer">
        {Object.keys(images).map((event) => (
          <div
            key={event}
            onClick={() => handleClick(event)} // Correctly pass the event
            className={`relative flex flex-col items-center justify-center transition-all duration-1000 rounded-lg overflow-hidden border-white border-2 
              ${
                event === selectedEvent
                  ? 'w-[150px] h-[200px] sm:w-[300px] sm:h-[280px] md:w-[400px] md:h-[350px] bg-[#CC1918] text-white'
                  : 'w-[30px] h-[200px] sm:w-[40px] sm:h-[280px] md:w-[60px] md:h-[350px] bg-blue-400 text-black'
              }`}
          >
            {/* Card image */}
            <img
              src={images[event]}
              className={`absolute w-full h-full object-cover ${
                event === selectedEvent ? 'opacity-100' : 'opacity-50'
              }`}
              alt={event}
            />
            {/* Name on the open image */}
            {event === selectedEvent && (
              <h1 className="absolute z-10 text-md sm:text-lg md:text-xl font-bold">
                Revealing Soon
              </h1>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeEvent2;
