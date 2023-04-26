import React from 'react';

export const Hero = () => {
    return (
        <section className="flex items-center p-8 justify-between bg-hero-bg bg-cover h-[95vh] sm:text-slate">
            <section className='text-white max-w-4 md:max-w-2xl pl-6 md:pl-20'>
                <h4 className='text-lg font-bold opacity-30'> Coming Soon </h4>
                <h1 className='font-semibold text-2xl md:max-w-lg md:text-6xl'> 
                    Say goodbye to <span className='text-indigo border-b-indigo'>tedious</span> tasks, 
                    and hello to a smarter way of getting things done.
                </h1>
                <p className='my-2 max-w-2 text-md'> 
                    Find the right talent or get hired for your next project. From design and development to marketing and writing,
                    our platform connects you with skilled freelancers.
                </p>
                <section className='mt-8'>
                    <a href='#subscribe' className='bg-white font-semibold text-black p-4'> Subscribe Now </a>
                </section>
            </section>
        </section>
    )
}
