import React, { useState, useRef, useEffect } from 'react';


const TopImageAnimation = ({ imgSrc, imgAlt, imgClasses }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="relative lg:w-full md:w-[95%] w-[90%] h-[250px] md:h-[280px] overflow-hidden object-cover rounded-lg ">
      {/* Green background */}
      <div
        className={`absolute inset-0 bg-[#001f3f] transition-transform duration-700 ease-out object-cover rounded-lg  ${
          isVisible ? 'translate-y-0 ' : '-translate-y-full '
        }`}
      />
      {/* Image */}
      <img
        src={imgSrc}
        alt={imgAlt}
        className={`${imgClasses} absolute inset-0 transition-transform duration-700 ease-out delay-700 ${
          isVisible ? 'translate-y-0 scale-100' : '-translate-y-full scale-80'
        }`}
      />
    </div>
  );
};

export default TopImageAnimation;
