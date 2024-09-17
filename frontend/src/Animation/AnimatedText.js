// import React, { useState, useEffect, useRef } from 'react';
// import './AnimatedText.css';

// const AnimatedText = ({ text }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       {
//         threshold: 0.1, // Trigger when 10% of the element is visible
//       }
//     );

//     if (containerRef.current) {
//       observer.observe(containerRef.current);
//     }

//     return () => {
//       if (containerRef.current) {
//         observer.unobserve(containerRef.current);
//       }
//     };
//   }, []);

//   const renderWords = () => {
//     return text.split(' ').map((word, index) => (
//       <span key={index} className={`word ${isVisible ? 'visible' : ''}`} style={{ animationDelay: `${index * 0.2}s` }}>
//         {word}&nbsp; {/* Add space between words */}
//       </span>
//     ));
//   };

//   return (
//     <div ref={containerRef} className="overflow-hidden">
//       {renderWords()}
//     </div>
//   );
// };

// export default AnimatedText;
import React, { useState, useEffect, useRef } from 'react';
import './AnimatedText.css';

const AnimatedText = ({ text }) => {
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
    <div ref={containerRef} className={`text-container ${isVisible ? 'visible' : ''}`}>
      {text}
    </div>
  );
};

export default AnimatedText;

