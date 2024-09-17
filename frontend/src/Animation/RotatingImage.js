import React from 'react';

const RotatingImage = ({ src, alt, className }) => {
  return (
    <div className="absolute top-1/3 left-32 flex item-center w-full h-full">
      <img
        src={src}
        alt={alt}
        className={`w-64 h-64 ${className}`}
        style={{
          animation: 'rotate 10s linear infinite',
        }}
      />
      <style jsx>{`
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default RotatingImage;
