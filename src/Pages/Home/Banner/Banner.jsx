import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Typewriter from "react-ts-typewriter";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";



// import required modules
import { Pagination,Autoplay } from "swiper";
import Marquee from "react-fast-marquee";

const Banner = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 6000,
                  disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper md:h-screen"
            >
                <SwiperSlide>
                    <img className="" src="https://i.ibb.co/Km8yfnq/kelly-sikkema-WRBy-Zhru-W6o-unsplash.jpg" />
                    <div className="absolute md:top-72 top-10 left-0 right-0 flex justify-center">
                        <div className="md:w-4/6 w-full mx-auto md:space-y-14 space-y-8 text-center">
                            <div className="md:text-7xl text-xl text-violet-500">
                            <Typewriter text="Welcome To SportsZone Academy" loop={true} speed={150} />
                            </div>
                            <Marquee>
                                <p className="md:text-2xl text-sm text-white">"SportsZone Academy: Dive into a summer of athletic exploration as students learn a variety of sports, igniting their passion for active living and fostering a lifelong love for physical activity."</p>
                            </Marquee>
                            <button className=" border border-violet-500 hover:bg-white text-violet-500  md:p-3 p-1 rounded-md font-bold  ">More Details</button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://i.ibb.co/V01MDmx/josh-applegate-6g-b4-Ewoho0-unsplash.jpg" />
                    <div className="absolute md:top-72 top-10 left-0 right-0 flex justify-center">
                        <div className="md:w-4/6 w-full mx-auto md:space-y-14 space-y-8 text-center">
                            <div className="md:text-7xl text-xl text-violet-500">
                            <Typewriter text="Welcome To SportsZone Academy" loop={true} speed={150} />
                            </div>
                            <Marquee>
                                <p className="md:text-2xl text-sm text-white">"SportsZone Academy: Dive into a summer of athletic exploration as students learn a variety of sports, igniting their passion for active living and fostering a lifelong love for physical activity."</p>
                            </Marquee>
                            <button className=" border border-violet-500 hover:bg-white text-violet-500  md:p-3 p-1 rounded-md font-bold  ">More Details</button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://i.ibb.co/nz8j8Z0/liz99-JOnae-Vo-Nk-TQ-unsplash.jpg" />
                    <div className="absolute md:top-72 top-10 left-0 right-0 flex justify-center">
                        <div className="md:w-4/6 w-full mx-auto md:space-y-14 space-y-8 text-center">
                            <div className="md:text-7xl text-xl text-violet-500">
                            <Typewriter text="Welcome To SportsZone Academy" loop={true} speed={150} />
                            </div>
                            <Marquee>
                                <p className="md:text-2xl text-sm text-white">"SportsZone Academy: Dive into a summer of athletic exploration as students learn a variety of sports, igniting their passion for active living and fostering a lifelong love for physical activity."</p>
                            </Marquee>
                            <button className=" border border-violet-500 hover:bg-white text-violet-500  md:p-3 p-1 rounded-md font-bold  ">More Details</button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://i.ibb.co/s1TYYhB/nicole-green-Qgi-Aey-GUUVQ-unsplash.jpg" />
                    <div className="absolute md:top-72 top-10 left-0 right-0 flex justify-center">
                        <div className="md:w-4/6 w-full mx-auto md:space-y-14 space-y-8 text-center">
                            <div className="md:text-7xl text-xl text-violet-500">
                            <Typewriter text="Welcome To SportsZone Academy" loop={true} speed={150} />
                            </div>
                            <Marquee>
                                <p className="md:text-2xl text-sm text-white">"SportsZone Academy: Dive into a summer of athletic exploration as students learn a variety of sports, igniting their passion for active living and fostering a lifelong love for physical activity."</p>
                            </Marquee>
                            <button className=" border border-violet-500 hover:bg-white text-violet-500  md:p-3 p-1 rounded-md font-bold  ">More Details</button>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default Banner;