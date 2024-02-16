'use client'

import { useRouter } from 'next/navigation';
import React from 'react';
import { Button } from '../../../@/components/ui/button';

export default function RegisterCTA() {
    const router = useRouter();

    return (
        <section className='container flex justify-center items-center gap-4 bg-gray-100 h-72 w-full'>
            <section className='w-full text-center'>
                <h1 className='text-2xl text-center font-bold'> 
                    Got a project in mind? Hire a freelancer now.
                </h1>
                <section className='mt-8'>
                    <Button className='font-bold uppercase' onClick={() => router.push('/register?accountType=client')}>
                        Regiser Now
                    </Button>
                    <p className='mt-2'> It takes 7 seconds. </p>
                </section>
            </section>
        </section>
    );
}
