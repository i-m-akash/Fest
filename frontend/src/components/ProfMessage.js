
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "tailwindcss/tailwind.css";
import Professor from "../Images/Professor.jpg";

// Inline styles for PlanetAnimation
const styles = {
  container: {
    position: 'absolute',
    width: '100%',
    height: '110%',
    background: 'linear-gradient(to bottom, #001f3f, #000000)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom:'20rem',

    zIndex: -1, // Make sure it is behind other content
  },
  planet: {
    position: 'relative',
    width: '8rem',
    height: '8rem',
    borderRadius: '50%',
    background: 'linear-gradient(to right, #4f83cc, #003a6d)',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    animation: 'spin-slow 20s linear infinite',
  },
  orbit: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '24rem',
    height: '24rem',
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    animation: 'orbit 30s linear infinite',
  },
  orbitItem: {
    position: 'absolute',
    width: '3rem',
    height: '3rem',
    background: '#ffffff',
    borderRadius: '50%',
    animation: 'orbit-item 20s linear infinite',
    transformOrigin: 'center',
  },
  orbit2: {
    position: 'absolute',
    top: '20%',
    left: '20%',
    width: '32rem',
    height: '32rem',
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    animation: 'orbit2 40s linear infinite',
  },
  orbitItem2: {
    position: 'absolute',
    width: '4rem',
    height: '4rem',
    background: '#bfa090',
    borderRadius: '50%',
    animation: 'orbit-item2 30s linear infinite',
    transformOrigin: 'center',
  },
  orbit3: {
    position: 'absolute',
    top: '80%',
    left: '80%',
    width: '36rem',
    height: '36rem',
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    animation: 'orbit3 60s linear infinite',
  },
  orbitItem3: {
    position: 'absolute',
    width: '6rem',
    height: '6rem',
    background: '#fa4087',
    borderRadius: '50%',
    animation: 'orbit-item3 40s linear infinite',
    transformOrigin: 'center',
  },
};

// Inline CSS for animations
const animationStyles = `
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes orbit {
  0% {
    transform: rotate(0deg) translateX(50%) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(50%) rotate(-360deg);
  }
}

@keyframes orbit-item {
  0% {
    transform: rotate(0deg) translateX(50%) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(50%) rotate(-360deg);
  }
}

@keyframes orbit2 {
  0% {
    transform: rotate(0deg) translateX(50%) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(50%) rotate(-360deg);
  }
}

@keyframes orbit-item2 {
  0% {
    transform: rotate(0deg) translateX(50%) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(50%) rotate(-360deg);
  }
}

@keyframes orbit3 {
  0% {
    transform: rotate(0deg) translateX(50%) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(50%) rotate(-360deg);
  }
}

@keyframes orbit-item3 {
  0% {
    transform: rotate(0deg) translateX(50%) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(50%) rotate(-360deg);
  }
}
`;

// PlanetAnimation Component
const PlanetAnimation = () => {
  return (
    <div style={styles.container}>
      <style>{animationStyles}</style>
      <div style={styles.planet}>
        <div style={styles.orbit}>
          <div style={styles.orbitItem}></div>
        </div>
        <div style={styles.orbit2}>
          <div style={styles.orbitItem2}></div>
        </div>
        <div style={styles.orbit3}>
          <div style={styles.orbitItem3}></div>
        </div>
      </div>
    </div>
  );
};

// HorizontalCard Component
const HorizontalCard = () => {

  const handleLearnMoreClick = () => {
    
    window.location.href = "https://aiimsrishikesh.edu.in/a1_1/?page_id=898"; // Navigates to the external URL
  };

  return (
    <div
      className="relative  flex flex-col md:flex-row max-w-4xl  mx-auto my-auto bg-transparent shadow-lg rounded-lg overflow-hidden border border-gray-200 cursor-grab shadow-[3px_4px_5px_rgba(59,130,246,0.6)]"
      style={{ zIndex: 1 }} // Ensure it's above the background
    >
      {/* Image Section */}
      <div className="w-full md:w-1/3 flex-shrink-0 relative">
        <img
          src={Professor}
          className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg"
          alt="Professor"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white">
          <h6 className="text-sm font-semibold uppercase">CHIEF PATRON</h6>
          <h4 className="text-lg font-semibold mt-2">Prof. Meenu Singh</h4>
        </div>
      </div>
      
      {/* Text Section */}
      <div className="p-6 flex-1">
        <p className="text-white mb-4">
          I firmly believe that learning cannot be limited to the confines of a classroom. AIIMS Rishikesh is reviving its annual fest Pyrexia 24, which provides students with the opportunity to showcase their talents and promote trust, teamwork, and sportsmanship.
          Pyrexia 24 is the biggest event of its kind and provides students with the opportunity to showcase their talents and promote trust, teamwork, and sportsmanship.
          I congratulate and wish all the students the very best for Pyrexia 2024. Let the various events and activities bring glory to us and enrich our lives with value that can sustain over a long period of time.
        </p>
        <p className="text-white">Best wishes,</p>
        <p className="text-white mb-4">Prof. Meenu Singh</p>
        <button
          onClick={handleLearnMoreClick}
          className="inline-flex items-center text-yellow-200 hover:text-blue-800 focus:outline-none"
        >
          <span>Learn More About Us</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            className="h-4 w-4 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

// Combined Component
const  ProfMessage = () => {
  return (
    <div className="relative flex justify-center items-center w-full min-h-screen ">
      {/* Planet Animation Background */}
      <PlanetAnimation />

      {/* Horizontal Card on Top */}
      <div className="relative z-10 flex justify-center items-center ">
        <HorizontalCard />
      </div>
    </div>
  );
};

export default ProfMessage;
