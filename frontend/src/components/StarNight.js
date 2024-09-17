import React from 'react';
import Alfresco from '../Images/Revealing soon (5).PNG';
import Kalakriti from '../Images/Revealing soon (6).PNG';
import Littmania from '../Images/Revealing soon (3).PNG';
import Solasta from '../Images/Revealing soon (2).PNG';
import Velocity from '../Images/Revealing soon (1).PNG';
import Thunderbolt from '../Images/Revealing soon.PNG';
import FixedBackground from '../Images/cimg4.webp'; // Import your fixed background image

const StarNight = () => {
    document.title = "StarNight | Pyrexia 2024";

    // Array of events with images
    const events = [
        {
            name: '',
            imgSrc: Alfresco,
            description: "Experience a wonderful event under the open sky with exciting performances and mesmerizing visuals.",
        },
        {
            name: '',
            imgSrc: Kalakriti,
            description: "A night filled with creativity and art, showcasing the best talents in the artistic world.",
        },
        {
            name: '',
            imgSrc: Littmania,
            description: "Dive into the world of literature and enjoy the artistic performances inspired by timeless tales.",
        },
        {
            name: '',
            imgSrc: Solasta,
            description: "Feel the vibe of energetic performances and dazzling lights on this vibrant night.",
        },
        {
            name: '',
            imgSrc: Velocity,
            description: "A night full of high-speed performances and heart-thumping excitement.",
        },
        {
            name: '',
            imgSrc: Thunderbolt,
            description: "Prepare for an electrifying night that will leave you thrilled with its dynamic performances.",
        }
    ];

    return (
        <div className="relative bg-cover bg-center bg-fixed font-sans-serif poppins min-h-screen mt-16" style={{ backgroundImage: `url(${FixedBackground})`,backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100%', 
        width: '100%', }}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
            <div className="z-10 relative text-center py-20">
                <h1 className="text-white text-5xl md:text-6xl font-bold mb-12 animate-bounce ">
                    STARNIGHT 2024</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-10">
                    {events.map((event, index) => (
                        <div key={index} className="bg-gray-800 bg-opacity-70 text-white p-6 rounded-lg shadow-xl hover:shadow-xl transition-shadow duration-300">
                            <img src={event.imgSrc} alt={event.name} className="w-full h-72 object-cover mb-6 rounded-lg" />
                            <h2 className="text-3xl font-semibold mb-4">{event.name}</h2>
                            <p className="text-lg opacity-75">{event.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StarNight;