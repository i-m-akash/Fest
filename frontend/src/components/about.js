import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import img from '../Images/pyrexiaAbout.jpg';
import LeftImageAnimation from '../Animation/LeftImageAnimation';
import AnimatedText from '../Animation/AnimatedText';
gsap.registerPlugin(ScrollTrigger);

const About = () => {
    useEffect(() => {
        // GSAP animation with ScrollTrigger
        gsap.fromTo(
            '.fade-in',
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                stagger: 0.3,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.fade-in-container',
                    start: 'top 180%',
                    end: 'bottom top',
                    scrub: true,
                },
            }
        );
    }, []);

    return (
        <div className="relative min-h-screen bg-gray-300 flex flex-col lg:flex-row lg:items-center justify-center items-center p-5 lg:p-10">
            {/* Image Section (hidden or shown above the text on small screens) */}
            <div className="w-full lg:w-1/2 flex invisible lg:visible
 items-center justify-center lg:justify-start lg:ml-20  lg:order-0 mb-8 md:mb-0 ">
                <LeftImageAnimation
                    imgSrc={img}
                    imgAlt="About"
                    imgClasses="w-full h-auto object-cover border-black rounded-lg shadow-xl drop-shadow-[2px_40px_80px_rgba(69,130,246,0.9)] lg:max-w-md" // Dynamic Tailwind classes
                />
            </div>

            {/* Text Section */}
            <div className="relative z-20 flex flex-col items-start justify-center text-white lg:w-1/2 px-6 lg:pl-10 lg:pr-10">
                <div className="fade-in-container text-center lg:text-left px-1 py-1 md:px-10 md:py-10 max-w-3xl mx-auto border-2 border-transparent border-image-gradient">
                    <h1 className="text-6xl font-sans-serif poppins mb-10 font-bold text-black fade-in">
                        <AnimatedText text="About" />
                    </h1>
                    <p className="text-xl font-sans-serif poppins fade-in text-black">
                        <AnimatedText
                            text="Get ready for Pyrexia 4.0, the most electrifying five-day festival at AIIMS Rishikesh! This year promises an explosive mix of intense competitions, mesmerizing performances, and thrilling concerts, all set against the stunning backdrop of the Ganges and Himalayas. For five unforgettable days, Pyrexia 4.0 will be a whirlwind of energy and excitement. Join students from across India as they compete, showcase their talents, and soak in the vibrant atmosphere. Mark your calendars for October and dive into a festival that blends passion, creativity, and camaraderie like never before!"
                        />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
