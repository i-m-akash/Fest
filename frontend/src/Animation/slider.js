import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css"; // Create this file for custom styles
import img1 from "../Images/PHOTO-2024-08-15-18-53-15.jpg";
import img2 from "../Images/PHOTO-2024-08-15-18-53-33.jpg";
import img3 from "../Images/PHOTO-2024-08-15-18-54-35.jpg";
import img4 from "../Images/PHOTO-2024-08-15-18-55-26.jpg";
import img5 from "../Images/PHOTO-2024-08-15-18-58-16.jpg";
import img6 from "../Images/PHOTO-2024-08-15-19-00-28.jpg";
import img7 from "../Images/PHOTO-2024-08-15-19-05-07.jpg";
import img8 from "../Images/PHOTO-2024-08-15-19-06-24.jpg";
import img9 from "../Images/PHOTO-2024-08-15-19-06-42.jpg";
import img10 from "../Images/PHOTO-2024-08-15-19-07-10.jpg";
import img11 from "../Images/PHOTO-2024-08-15-19-07-28.jpg";
import img12 from "../Images/PHOTO-2024-08-15-19-08-16.jpg";
import img13 from "../Images/PHOTO-2024-08-15-19-09-02.jpg";

const Slider1 = () => {
  const images = [
    img1,img2,img3,img4,img8,img5,img6,img7,img9,img10,img11,img12,img13
  ];
  const settings = {    
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    cssEase: "linear",
  };

  return (
    <div className="image-slider">
      <div className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold font-sant-serif poppins py-20 animate-bounce">Gallery</div>
      <Slider {...settings}>
        {images.map((image, index) => (
    
          <div key={index}>

            <img src={image} className='w-[80%] md:w-[50%] lg:w-[30%] border rounded-md shadow-xl h-auto'alt={`Slide ${index}`} />
          </div>
        ))}
        
      </Slider>
    </div>
  );
};

export default Slider1;
