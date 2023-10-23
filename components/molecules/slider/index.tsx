import React, { ReactNode } from 'react'
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

type SliderProps = {
    children: React.ReactNode[];
}

export const Slide = ({ children }: SliderProps) => {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            spaceBetween={10}
            navigation
            slidesPerView={1}
            className='max-h-max'
        >
            {children.map((item: ReactNode, index) => (
                <SwiperSlide key={index} className='object-cover w-full h-48'>
                    {item}
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
