'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FiCheck } from 'react-icons/fi';

export default function GettingStarted() {
    const router = useRouter();
    const handleNextStep = () => router.push('/apply/personal');

  return (
      <section className='container'>
        <h3 className='font-semibold text-md text-gray'> Get Started </h3>
        <h3 className='font-semibold text-2xl'>
            Hey, are you ready to take on new oppportunities? It takes about 10 minutes.
        </h3>
        <p className='text-md mb-4'> 
            To be able to apply for jobs, we require that you apply for an application.
        </p>
        <section>
            <ul>
                <li className='flex items-center gap-2'> <FiCheck className='font-lg font-bold text-[green]' /> Project milestones </li>
                <li className='flex items-center gap-2'> <FiCheck className='font-lg font-bold text-[green]' /> Safe payment system </li>
                <li className='flex items-center gap-2'> <FiCheck className='font-bold text-[green]' /> Customer Support </li>
                <li className='flex items-center gap-2'> <FiCheck className='font-bold text-[green]' /> Fast payments </li>
                <li className='flex items-center gap-2'> <FiCheck className='font-bold text-[green]' /> Enhanced communication tools </li>
                <li className='flex items-center gap-2'> <FiCheck className='font-bold text-[green]' /> and more... </li>
            </ul>
            <br />
            <br />
            <h2 className='font-bold'> Please note </h2>
            <p>
                Creating an application on this platform does not guarantee approval. 
                Part of our mission is to make sure we are the only hope for the best talents. 
                <Link className='text-[blue] underline' href='/guides'>
                    Learn more
                </Link>. 
            </p>
        </section>

        <section className='flex item-center justify-right w-full'>
            <button
                className='bg-slate-900 text-white px-3 py-2'
                onClick={handleNextStep}
            >
                Get Started 
            </button>
        </section>
      </section>
  );
};
