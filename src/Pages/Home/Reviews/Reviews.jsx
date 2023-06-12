import React from 'react';
import Typewriter from 'react-ts-typewriter';
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useState } from 'react';
import { useEffect } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://summer-seekers-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <div className='md:text-6xl text-2xl text-violet-500 text-center md:my-20 my-10 font-semibold'>
                <Typewriter text="Client's Reviews" loop={true} speed={250} />
            </div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className='flex items-center justify-center md:mx-20 mx-14 text-center '>
                            <div className="flex flex-col items-center space-y-4">
                                <figure><img className='h-20 w-20 rounded-full' src={review.image} alt="image" /></figure>
                                <h3 className='md:text-3xl text-xl font-semibold '>{review.name}</h3>
                                <p className='md:text-xl'>{review.details}</p>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly

                                />
                            </div>
                        </div>
                    </SwiperSlide>)
                }
                {/* <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide> */}
            </Swiper>


        </div>
    );
};

export default Reviews;