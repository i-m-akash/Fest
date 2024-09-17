import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import img from "../Images/cimg4.webp";
const SubEventDetails = () => {
  const location = useLocation();
  const subEvent = location.state?.subEvent; // Use optional chaining in case state is undefined
  const navigate = useNavigate();
  const activeEvent = location.state?.activeEvent;
  console.log(subEvent)


  const handleClick = () => {
    navigate('/events', { state: { activeEvent } });
  };


  if (!subEvent) {
    return <p>Error: No event data available.</p>; // Handle the case where no event data is available
  }

  return (
    <div className="p-6 font-sans-serif text-white font-bold poppins mt-16 w-full min-h-screen   " style={{
      backgroundImage: `url(${img})`,
      backgroundSize: 'cover',
      backgroundPosition: 'top ',
    }}>
    <div
  onClick={handleClick} // Wraps the SVG in a clickable area
  style={{
    position: 'fixed',
    top: '80px',
    left: '20px',
    padding: '20px', // Adjust padding to make the clickable area larger
    cursor: 'pointer',
    
  }}
>
<svg
  viewBox="0 0 24 24"
  width="32"
  height="32"
  fill="white"
>
  <path d="M19 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H19v-2z" />
</svg>


  
</div>

      <div className='border-[#001f3f] bg-gray-600 bg-opacity-65 border rounded-lg shadow-xl max-w-4xl mx-auto px-10 py-10'>
        <h1 className="text-2xl md:text-4xl font-bold">{subEvent.title}</h1>

        {subEvent.image && (
          <div className="mx-auto flex justify-center mt-6 mb-6 ">
            <img
              src={subEvent.image}
              alt={subEvent.title}
              className="w-[70%] md:w-[50%]  h-auto rounded-lg shadow-md"
            />
          </div>
        )}



        {/* Conditionally render tagline */}
        {subEvent.tagline && (
          <p className="mt-4 text-xl md:text-2xl mb-2">{subEvent.tagline}</p>
        )}

        <p className="my-4  text-lg md:text-xl">{subEvent.description}</p>
        {subEvent.teamSize && (
          <p className="mt-2 text-md  md:text-lg ">Team Size: {subEvent.teamSize}</p>
        )}
        {/* Conditionally render contact information */}
        {(subEvent.contact1 || subEvent.contact2 || subEvent.contact3) && (
          <p className="mt-2 text-md  md:text-lg ">
            Contact: {subEvent.contact1} {subEvent.contact2} {subEvent.contact3}
          </p>
        )}

        {/* Conditionally render date, time, venue, and prize */}
        {subEvent.date && <p className="mt-2 text-md  md:text-lg ">Date: {subEvent.date}</p>}
        {subEvent.time && <p className="mt-2 text-md  md:text-lg ">Time: {subEvent.time}</p>}
        {subEvent.venue && <p className="mt-2 text-md  md:text-lg ">Venue: {subEvent.venue}</p>}
        {/* {subEvent.prize && <p className="mt-2 text-md  md:text-lg ">Prize: {subEvent.prize}</p>} */}

        <p className="mt-2 text-md  md:text-lg ">Fees: {subEvent.registrationFees}</p>
        {/* <p className="mt-2 text-md  md:text-lg ">Status: {subEvent.status}</p> */}

        {/* Conditionally render rulebook link */}
        {subEvent.rulebook && (
          <a
            href={subEvent.rulebook}
            className="text-rose-700 hover:underline mt-6"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Rulebook (PDF)
          </a>
        )}

        <button className="block bg-[#001f3f] hover:bg-gradient-to-t from-blue-800 via-blue-500 to-navy-700 , text-white mt-4 py-2 px-4 rounded text-md  md:text-lg ">
          <a href={subEvent.link}>Register</a>
        </button>
      </div>
    </div>
  );
};

export default SubEventDetails;
