import React from 'react';

const BasicRegistration = () => {
  document.title = "Registration | Pyrexia 2024"; // Set page title

  return (
    <div className='bg-[#001f3f] min-h-screen'>
      {/* Header Section */}
      <div className="relative pt-28 pb-16 flex items-center justify-center">
        <h1 className="text-[#ebe6d0] text-center text-[3.5rem] font-semibold leading-[4.5rem] z-10 md:text-[3.7rem] md:px-12 md:leading-[3.5rem]">
          Basic Registration
        </h1>
      </div>

      {/* Content Section */}
      <div className=" pb-20 flex relative items-center justify-center text-white">
        <div className="backdrop-blur-sm rounded-xl  m-auto h-fit p-6 m-auto lg:px-10">
          <div className="px-4 md:px-10 lg:px-10 text-lg font-light text-justify max-w-4xl border pt-10  pb-10">
            <p className="mb-4">
              1. It is mandatory for entry into AIIMS Rishikesh premises during the fest.
            </p>
            <p className="mb-4">
              2. It serves as your official identification throughout the fest, ensuring seamless entry and participation.
            </p>
            <p className="mb-4">
              3. Registration is required to ensure smooth coordination and participation in the fest.
            </p>
            <p className="font-bold text-lg">Cost: ₹200</p>
          </div>

          {/* Register Button */}
          <div className="flex justify-center items-center mt-10">
            <button
              
              className="bg-[#ebe6d0] text-black px-6 py-2.5 rounded-lg font-bold text-sm border-black hover:bg-[#d9d2b8] transition duration-300"
            >
              <a href="https://forms.gle/PRjwsH44sZiHBaUr5">Register Now</a>
            </button>
          </div>

          {/* Decorative Dots */}
          <div className="flex items-center justify-center gap-3 pt-16 pb-16">
            <div className="h-3 w-3 bg-[#ebe6d0] rotate-45"></div>
            <div className="h-3 w-3 bg-[#ebe6d0] rotate-45"></div>
            <div className="h-3 w-3 bg-[#ebe6d0] rotate-45"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicRegistration;
