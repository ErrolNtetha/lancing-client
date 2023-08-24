'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const ShowCase = () => {
    return (
        <section className='bg-white flex items-center'>
            <section className='container h-full md:flex items-center justify-around'>
                <motion.section 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className='hidden md:block'
                >
                    <Image src='/assets/images/blackLady.png' alt='Smiling lady' width={300} height={300} />
                </motion.section>
                <motion.aside 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className='text-black max-w-30 m-8'>
                    {/* <h4 className='text-md md:text-lg font-bold opacity-30'> Our Vision </h4> */}
                    <h1 className='max-w-md font-extrabold text-2xl mb-2'>
                        Our Promise
                    </h1>
                    <p className='max-w-lg text-md mb-8 md:text-md'> 
                        Integrity is at the heart of everything we do. We promise to provide a secure, user-friendly platform that 
                        prioritizes your experience and success. We are passionate about creating opportunities that lead to impactful collaborations, memorable projects, 
                        thriving careers.
                    </p>
                </motion.aside>
            </section>
        </section>
    );
};
