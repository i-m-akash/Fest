import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';  // Ensure Swiper styles are imported
import TopImageAnimation from '../Animation/TopImageAnimation';
import { Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import Alfresco from '../Logos/Alfresco.jpg';
import Kalakriti from  '../Logos/Kalakriti .jpg';
import LITtMania from  '../Logos/Littmania.PNG';
import Sinfonia from  '../Logos/Sinfonia.jpg';
import Velocity from  '../Logos/Velocity.jpg';
import Thunderbolt from '../Logos/ThunderBolts.webp';
import Chorea from  '../Logos/CHOREA.jpg';
import Thespians from  '../Logos/Thespians.jpg';
import Chronos from '../Logos/Chorons.jpg';
const images = [
  { src: Alfresco, title: 'Alfresco' ,events:'Alfresco'},
  { src: Chorea, title: 'Chorea' , events: 'Chorea' },
  { src: Chronos, title: 'Chronos' ,events:'Chronos'},
  { src: Kalakriti, title: 'Kalakriti', events:'Kalakriti'},
  { src: LITtMania, title: 'LITtMania', events:'LITtMania'},
   { src: Sinfonia, title: 'Sinfonia', events:'Sinfonia'},
  { src: Thespians, title: 'Thespians' ,events:'Thespians'},
  { src: Thunderbolt, title: 'Thunderbolt', events:'Thunderbolt'},
  { src: Velocity, title: 'Velocity' ,events:'Velocity'},
 
];

const HomeEvent = () => {
  const navigate = useNavigate();

  const handleImageClick=(events)=>{
    navigate("/events",{state:{events}});
  };

  return (
    <section className="max-w-screen-xl mx-auto py-10">
      <h2 className="text-3xl mt-16 bg-[#001f3f] max-w-xl font-bold px-4 py-2 mx-auto text-center text-white font-sans-serif poppins border-2 border-[#001f3f] rounded-md">
        Major Events
      </h2>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}

        navigation
        loop
        breakpoints={{
          640: {
            slidesPerView: 1, // 1 card at a time on small screens
          },
          768: {
            slidesPerView: 2, // 2 cards at a time on medium screens
          },
          1024: {
            slidesPerView: 3, // 3 cards at a time on large screens
          },
        }}
        className="mySwiper justify-center text-center items-center"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="card flex mt-10 mb-10 ml-2 mr-2 flex-col w-full md:max-w-[350px] items-center rounded-lg p-6 shadow-[0_0px_5px_rgba(59,130,246,0.4)] cursor-grab transition-transform duration-300 hover:scale-105"
            onClick={()=> handleImageClick(image.events)}
            >
              <h2 className="text-center text-[#001f3f] font-bold text-xl md:text-2xl mb-4">
                {image.title}
              </h2>
              
      {/* Only use the animated component and remove the standalone <img> */}
      <TopImageAnimation
        imgSrc={image.src}  // Dynamic image source
        imgAlt={image.title}  // Dynamic alt text
        imgClasses="w-full  h-[250px] md:h-[280px]  object-cover  rounded-lg drop-shadow-[0_0px_80px_rgba(59,130,246,0.7)]"  // Dynamic Tailwind classes
      />
 
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HomeEvent;
