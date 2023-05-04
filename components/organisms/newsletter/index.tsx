import React from 'react';
import { Subscribe } from '../../molecules/subscribe';

export const Newsletter = () => {
    return (
        <section className='flex flex-col items-center justify-center  md:flex-row text-black py-4 bg-white max-h-full md:h-screen'>
            <aside >
                <h4 className='text-md font-bold opacity-40'> Newsletter </h4>
                <h1 className='max-w-lg font-extrabold text-2xl md:text-4xl mb-2'> 
                    Join us in our mission to make work less tedious and make it more fulfilling.
                </h1>
                <p className='max-w-xl text-sm md:text-lg'> 
                    We are committed to delivering exceptional value to both our clients and freelancers.
                </p>
            </aside>
            <Subscribe />
        </section>
    );
};
