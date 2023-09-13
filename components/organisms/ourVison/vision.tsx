'use client'

/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useProfileStore } from '../../../hooks/useGlobalStore';

export const Vision = () => {
    // @ts-ignore
    const myRef = useRef<React.ElementRef<HTMLElement> | null>(null);
    const toggleHeader= useProfileStore((state: any) => state.toggleHeader);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            toggleHeader(entry.isIntersecting);
        });

        // @ts-ignore
        observer.observe(myRef.current);
    }, []);

    return (
        <section className='flex items-center bg-white-p h-screen' ref={myRef}>
            <section className='container md:flex items-center justify-between'>
                <aside className='text-black max-w-30 m-8'>
                    <h4 className='text-md md:text-lg font-bold opacity-30'> Our Vision </h4>
                    <h1 className='max-w-md font-extrabold text-black text-2xl mb-2'>
                        Striving to be the go-to destination for anyone seeking quality freelance services.
                    </h1>
                    <p className='max-w-lg text-md mb-8 md:text-md'> 
                        At Duello, our vision is to empower freelancers in South Africa to work smarter, not harder.
                        We believe that by simplifying the process of finding and hiring top talent, we can enable individuals to 
                        achieve their goals faster and more efficiently.
                        <br />
                        <br />
                        Our goal and how we designed this platform is to foster collaboration, promote innovation, and create a global community of 
                        freelancers who are passionate about their work.
                    </p>
                </aside>
                <Image src='/assets/images/svg/work.svg' alt='Screenshots of clients looking for freelancers' width={450} height={300} />
            </section>
        </section>
    );
};
