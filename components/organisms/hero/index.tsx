import Link from 'next/link';
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

export const Hero = () => {
    return (
        <section className="container mx-auto flex items-center justify-between bg-hero-bg bg-cover h-[92vh] sm:text-slate">
            <section className='text-white max-w-4 md:max-w-2xl pl-6 md:pl-20'>
                <h1 className='font-semibold pr-4 text-3xl md:max-w-lg md:text-4xl'>
                    Say goodbye to <span className='text-indigo border-b-indigo'>tedious</span> tasks,
                    and hello to a smarter way of getting things done.
                </h1>
                <p className='my-2 max-w-2 text-lg pr-4'>
                    Find the right talent or get hired for your next project. From design and development to marketing and writing,
                    our platform connects you with skilled freelancers.
                </p>
                <section className='mt-8 inline-block'>
                    <Link href='/register' className='flex items-center gap-2 bg-white font-semibold text-black p-4'> Get Started <FiArrowRight className='text-md font-semibold' /> </Link>
                </section>
            </section>
        </section>
    );
};
