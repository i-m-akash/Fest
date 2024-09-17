import React from 'react';
import FixedBackground from '../Images/img12.jpg'; // Correct path

const TextWithImageBackground = () => {
  return (
    <div className="flex justify-center items-center mt-44 mb-28">
      <p
        className="bg-[#2f8d46] bg-repeat bg-clip-text text-transparent font-sans-serif poppins text-[120px] text-center font-bold uppercase font-[800] antialiased"
        style={{
          backgroundImage: `url(${FixedBackground})`,
        }}
      >
        Pyrexia
      </p>
    </div>
  );
};

export default TextWithImageBackground;
