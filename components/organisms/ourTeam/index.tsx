/* eslint-disable @next/next/no-img-element */

import React from 'react';
import { ImageSrc } from '../../molecules/image';

export const OurTeam = () => {
    return (
        <section className='flex items-center justify-center flex-col md:flex-row gap-8 bg-pattern-bg bg-cover h-screen '>
            <section className='flex items-center justify-center flex-col text-white'>
                <ImageSrc
                    src='/assets/images/errol.png'
                    size='150px'
                    alt='Smiling picture of the creator of Duello'
                />
                <section className='flex justify-center items-center mt-4 flex-col'>
                    <h1 className='font-extrabold'> Mphumeleli Errol Ntetha </h1>
                    <p> Creator of Duello </p>
                </section>
            </section>
            <span className='flex gap-y-6'>
                <p className='m-6 text-white text-sm md:text-lg max-w-md'> 
                    <span className='text-white font-extrabold text-lg'>&lsquo;&lsquo;</span>
                     I have been falling short of people who will do my
                    tedious tasks that I have no idea about, and not knowing where to find them. That is why I have
                    had to develop this platform.
                    <span className='text-white font-extrabold text-lg'>&rsquo;&rsquo;</span>
                    <br />
                    <br />
                    Born in Durban, South Africa, Mphumeleli is the creator of Duello and believes that we as South Africans, and Africa as a whole, have 
                    more than enough capabilities to establish our very own products/services to showcase our skills. 
                </p>
            </span>
        </section>
    );
};
