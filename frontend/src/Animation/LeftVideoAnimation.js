import React, { useState, useRef, useEffect } from 'react';

const LeftVideoAnimation = ({ videoSrc, videoAlt, videoClasses, children }) => {
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
    <div ref={containerRef} className="relative w-full min-h-screen overflow-hidden">
      {/* Green background */}
      <div
        className={`absolute inset-0 bg-[#001f3f] transition-transform duration-700 ease-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      />
      {/* Video */}
      <video
        src={videoSrc}
        alt={videoAlt}
        className={`${videoClasses} absolute inset-0 transition-transform duration-700 ease-out delay-700 ${
           isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 '
          // isVisible ? 'opacity-100 mask-opacity-100 translate-x-0  ' : '-translate-x-full opacity-0 mask-opacity-90'
        }`}
        autoPlay
        muted
        loop
        // style={{
        //   maskImage: 'linear-gradient(to right, transparent 0%, black 20%)', // This creates the fade effect
        //   WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%)', // Safari support
        // }}
      />
      {/* Overlay text */}
      {children}
    </div>
  );
};

export default LeftVideoAnimation;
