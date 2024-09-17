
import React, { useState, useRef, useEffect } from 'react';

const RightImageAnimation = ({ imgSrc, imgAlt, imgClasses }) => {
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
    <div ref={containerRef} className="relative w-full h-[200px] md:h-[250px] overflow-hidden">
      {/* Green background */}
      <div
        className={`absolute inset-0 bg-[#001f3f] transition-transform duration-700 ease-out ${
          isVisible ? 'translate-x-0' : 'translate-x-full'
        }`}
      />
      {/* Image */}
      <img
        src={imgSrc}
        alt={imgAlt}
        className={`${imgClasses} absolute inset-0 transition-transform duration-700 ease-out delay-700 ${
          isVisible ? 'translate-x-0 scale-150' : 'translate-x-full scale-100'
        }`}
      />
    </div>
  );
};

export default RightImageAnimation;
