import React from 'react';
import { ImageSrc } from '../../molecules/image';

export const OurTeam = () => {
    return (
        <section className='flex items-center justify-center flex-col md:flex-row gap-8 bg-pattern-bg bg-cover h-full py-10'>
            <section className='flex items-center justify-center flex-col text-white'>
                <ImageSrc
                    src='/assets/images/errol.png'
                    size='w-28 h-28'
                    alt='Smiling picture of the creator of Duello'
                />
                <section className='flex justify-center items-center mt-4 flex-col'>
                    <h1 className='font-extrabold text-xl'> Mphumeleli Ntetha </h1>
                    <p className='text-md'> Founder & CEO, Duello </p>
                </section>
            </section>
            <span className='flex gap-y-6'>
                <p className='m-6 text-white text-sm md:text-md max-w-md'> 
                    As a passionate advocate for freelancers and businesses alike, I embarked on a journey to redefine the freelancing 
                    experience in South Africa. Duello isn&apos;t just a platform; it&apos;s a manifestation of my commitment to empowering talent, fostering 
                    collaboration, and propelling projects to new heights.
                    <br />
                    <br />
                    With a deep-rooted belief in the power of connections, I envisioned a platform that brings together freelancers and clients in an environment 
                    driven by innovation, integrity, and excellence. Our mission at Duello is to simplify the complex, to transform the mundane into the extraodinary, 
                    and to unlock opportunities that transcend boundaries.
                </p>
            </span>
        </section>
    );
};
