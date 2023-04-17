import Image from 'next/image';
import React from 'react';

export const Hero = () => {
    return (
        <section className="flex items-center justify-between bg-hero-bg bg-cover h-screen sm:text-slate">
            <section className='text-white max-w-3 md:max-w-2xl pl-6 md:pl-20'>
                <h4 className='text-lg font-bold opacity-30'> Coming Soon </h4>
                <h1 className='font-semibold text-2xl md:text-5xl'> 
                    Say goodbye to <span className='text-indigo border-b-indigo'>tedious</span> tasks, 
                    and hello to a smarter way of getting things done.
                </h1>
                <p className='my-2 max-w-3'> 
                    Find the right talent or get hired for your next project. From design and development to marketing and writing,
                    our platform connects you with skilled freelancers.
                </p>
                <section className='mt-4'>
                    <a href='#subscribe' className='bg-indigo font-semibold text-black p-4'> Subscribe Now </a>
                </section>
            </section>
        </section>
    )
}
