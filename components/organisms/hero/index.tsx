'use client'

import Link from 'next/link';
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Button } from '../../../@/components/ui/button';
import { useAuth } from '../../../hooks/useAuth';

export const Hero = () => {
    const { currentUser } = useAuth();

    return (
        <section className="md:container mx-auto flex items-center justify-between bg-background h-[92vh] sm:text-foreground">
            <section className='text-foreground max-w-4 md:max-w-2xl pl-6 md:pl-20'>
                <h1 className='font-semibold pr-4 text-3xl md:max-w-lg md:text-4xl'>
                    Say goodbye to <span className='text-indigo border-b-indigo'>tedious</span> tasks,
                    and hello to a smarter way of getting things done.
                </h1>
                <p className='my-2 max-w-2 text-lg pr-4'>
                    Find the right talent for your next project. From design and development to marketing and writing,
                    our platform connects you with skilled freelancers.
                </p>
                <section className='flex items-center gap-3 mt-8'>
                    <Button className='flex items-center border border-black gap-2 bg-white font-semibold text-black py-6 px-4' variant='outline' asChild>
                        <Link href={currentUser ? '/feed' : '/register'} > {currentUser ? 'Go to feed' : 'Get Started'} <FiArrowRight className='text-md font-semibold' /> </Link>
                    </Button>
                    {!currentUser && <Link href='/login' className='font-extrabold'> Login </Link>}
                </section>
            </section>
        </section>
    );
};
