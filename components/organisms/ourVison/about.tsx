import React from 'react';
import Image from 'next/image';

export const About = () => {
    return (
        <section className='md:flex items-center justify-center bg-background md:pt-0 py-8 h-full md:h-screen'>
            <section className='md:container md:flex items-center justify-around'>
                <aside className='text-black max-w-30 m-8'>
                    <h4 className='text-md md:text-lg font-bold opacity-30'> Who We Are </h4>
                    <h1 className='max-w-md font-extrabold text-black text-2xl mb-2'>
                        Redefining the Freelancing Experience in South Africa
                    </h1>
                    <p className='max-w-lg text-md mb-8 md:text-md'> 
                        Duello is a South African freelancing marketplace for highly skilled freelancers.
                        <br />
                        <br />
                        Founded by Mphumeleli Ntetha, a visionary entrepreneur with a relentless drive for excellence, Duello was 
                        born out of a deep understanding of the freelancing landscape. With years of experience as both a freelancer 
                        and client, Mphumeleli recognized the need for a platform that not only connects talent but also nurtures 
                        growth, trust, and innovation.
                    </p>
                </aside>
                <Image src='/assets/images/about.png' alt='Smiling lady' width={500} height={500} />
            </section>
        </section>
    );
};
