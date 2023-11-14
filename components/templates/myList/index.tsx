'use client'

import Link from 'next/link';
import React from 'react';
import { Button } from '../../../@/components/ui/button';
import List from './list';

export default function MyList() {
    return (
        <section className='m-3 md:container'>
            <List />

            <section className='fixed bottom-0 bg-background left-0 w-full p-2'>
                <Button className='w-full' asChild>
                    <Link href='/mylistings/new'> Create New List </Link>
                </Button>
            </section>
        </section>
    );
};
