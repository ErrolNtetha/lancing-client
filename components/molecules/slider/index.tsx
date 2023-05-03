import React from 'react'
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';

export const Slide = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar]}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            spaceBetween={10}
            navigation
            slidesPerView={4}
            className='max-h-max border border-gray'
        >
            <SwiperSlide className='w-full object-cover w-30 h-30'>
                <Image src='/images/users/woman.jpg' width={500} height={500} className='rounded-sm object-cover w-20 h-20'  alt='woman facing the camera' />
            </SwiperSlide>
            <SwiperSlide>
                <Image src='/images/users/guy.jpg' width={200} height={200} className='rounded-sm object-cover w-20 h-20' alt='fdf' />
            </SwiperSlide>
            <SwiperSlide> Slide 3 </SwiperSlide>
            <SwiperSlide> Slide 4 </SwiperSlide>
        </Swiper>
    );
};
