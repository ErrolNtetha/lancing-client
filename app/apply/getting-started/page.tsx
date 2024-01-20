'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FiCheck } from 'react-icons/fi';
import { Button } from '../../../@/components/ui/button';

export default function GettingStarted() {
    const router = useRouter();
    const handleNextStep = () => router.push('/apply/personal');

  return (
      <>
        <h3 className='font-semibold text-md text-gray-400'> Get Started </h3>
        <h3 className='font-semibold text-2xl'>
            Before starting an application, please take note of the following checklist...
        </h3>
        <section>
            <br />
            <h2 className='font-bold'> You must: </h2>
            <ul>
                <li className='flex items-center gap-2'> <FiCheck className='font-bold text-[green]' /> Be a South African citizen </li>
                <li className='flex items-center gap-2'> <FiCheck className='font-bold text-[green]' /> <strong>Not</strong> be an Agency </li>
                <li className='flex items-center gap-2'> <FiCheck className='font-lg font-bold text-[green]' /> Have a South African bank account </li>
                <li className='flex items-center gap-2'> <FiCheck className='font-lg font-bold text-[green]' /> Provide a clear profile picture </li>
                <li className='flex items-center gap-2'> <FiCheck className='font-lg font-bold text-[green]' /> Have at least a portfolio </li>
            </ul>
            <br />
            <br />
            <h2 className='font-bold'> Please note: </h2>
            <p>
                Creating an application on this platform does not guarantee approval. {" "}
                <Link className='text-[blue] underline' href='/guides'>
                    Learn more
                </Link>. 
            </p>
        </section>

        <section className='fixed bottom-0 left-0 w-full p-2 bg-background'>
            <Button className='w-full' type='button' onClick={handleNextStep}>
                Get Started
            </Button>
        </section>
      </>
  );
};
