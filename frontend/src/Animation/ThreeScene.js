import saatvikImg from "../Images/Littmania.png";
import kiraImg from "../Images/Littmania.png";
import srihariImg from "../Images/Littmania.png";
// src/components/Testimonials.js

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import Swiper modules
import { Navigation, Pagination } from 'swiper/modules';



const Testimonials = () => {
    return (
        <section className="max-w-screen-xl mx-auto pb-12">
            <h2 className="text-3xl sm:text-[40px] bg-[#111] sm:w-max relative z-10 font-bold px-4 py-2 mx-auto text-center text-[#1788ae] sm:border-2 border-[#1788ae] rounded-md">
                What my clients are saying?
            </h2>
            <div className="swiper-container mySwiper !py-14">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    loop
                >
                    <SwiperSlide>
                        <div className="flex flex-col md:flex-row w-full md:max-w-[800px] items-center rounded-lg p-9 shadow-[0_0px_50px_rgba(59,130,246,0.6)] cursor-grab">
                            <img
                                className="shrink-0 w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full drop-shadow-[0_0px_80px_rgba(59,130,246,1)]"
                                src={saatvikImg}
                                alt="Saatvik Nagpal"
                            />
                            <div className="testimonial-text ml-6 text-left pt-6 md:pt-16 relative">
                                <p className="text-sm md:text-base mb-2">
                                    “Anurag is a talented, committed individual who will leave no stone unturned in his pursuit to provide with the best. His attention to detail and in-depth experience in the field of web development is indeed commendable. He has exhibited exemplary skills in the field, and I hope to see all the great projects coming up!”
                                </p>
                                <h2 className="text-right text-[#459bd5] font-bold text-2xl md:text-4xl">
                                    Saatvik Nagpal
                                </h2>
                                <h5 className="text-right text-[#459bd5] text-base md:text-lg">
                                    Founder, EazyGrad
                                </h5>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col md:flex-row w-full md:max-w-[800px] items-center rounded-lg p-9 shadow-[0_0px_50px_rgba(59,130,246,0.6)] cursor-grab">
                            <img
                                className="shrink-0 w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full drop-shadow-[0_0px_80px_rgba(59,130,246,1)]"
                                src={kiraImg}
                                alt="Kira Bragg"
                            />
                            <div className="testimonial-text ml-6 text-left pt-6 md:pt-16 relative">
                                <p className="text-sm md:text-base mb-2">
                                    “Anurag was a wonderful developer to work with! He anticipated everything I needed to consider for my website. He also went the extra mile and added details that I hadn't considered! He is helping my business grow, and I will definitely work with him again!”
                                </p>
                                <h2 className="text-right text-[#459bd5] font-bold text-2xl md:text-4xl">
                                    Kira Bragg
                                </h2>
                                <h5 className="text-right text-[#459bd5] text-base md:text-lg">
                                    English Mentor
                                </h5>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col md:flex-row w-full md:max-w-[800px] items-center rounded-lg p-9 shadow-[0_0px_50px_rgba(59,130,246,0.6)] cursor-grab">
                            <img
                                className="shrink-0 w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full drop-shadow-[0_0px_80px_rgba(59,130,246,1)]"
                                src={srihariImg}
                                alt="Srihari Kestur"
                            />
                            <div className="testimonial-text ml-6 text-left pt-6 md:pt-16 relative">
                                <p className="text-sm md:text-base mb-2">
                                    “I worked with Anurag to make my website. I am speechless by looking at his work ethic and dedication. Working with him was the best decision I made.”
                                </p>
                                <h2 className="text-right text-[#459bd5] font-bold text-2xl md:text-4xl">
                                    Srihari Kestur
                                </h2>
                                <h5 className="text-right text-[#459bd5] text-base md:text-lg">
                                    Founder Harigurus
                                </h5>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;
