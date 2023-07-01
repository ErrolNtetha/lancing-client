/* eslint-disable @next/next/no-img-element */

import Image from 'next/image';
import React from 'react';

export const OurTeam = () => {
    return (
        <section className='flex items-center justify-center flex-col md:flex-row gap-8 bg-pattern-bg bg-cover h-screen '>
            <section className='flex items-center justify-center flex-col text-white'>
                <Image
                    src='/assets/images/errol.png'
                    width={150}
                    height={150}
                    objectFit='cover'
                    className='rounded-full ring-1 ring-black '
                    alt='Smiling picture of the creator of Tedious'
                />
                <section className='flex justify-center items-center mt-4 flex-col'>
                    <h1 className='font-extrabold'> Mphumeleli Errol Ntetha </h1>
                    <p> Creator of Duello </p>
                </section>
            </section>
            <span className='flex gap-y-6'>
                <p className='m-6 text-white text-sm md:text-lg max-w-md'> 
                    <span className='block text-white font-extrabold text-lg'>&lsquo;&lsquo;</span>
                     I have been falling short of people who will do my
                    tedious tasks that I have no idea about, and not knowing where to find them. That is why I have
                    had to develop this platform.
                    <span className='text-white font-extrabold text-lg'>&rsquo;&rsquo;</span>
                    <br />
                    <br />
                    Born in Durban, South Africa, Mphumeleli is the Founder and CEO of Tedious and believes that we as South Africans have 
                    more than enough capabilities to establish our very own products/services to showcase our skills. 
                </p>
            </span>
        </section>
    );
};
