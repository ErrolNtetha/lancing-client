'use client'

import React from 'react';
import ImageGuidelines from './image-guidelines';
import Personal from './personal';

export default function PersonalStep() {
    return (
        <section className='container flex justify-between'>
            <section className='md:flex-[0.6]'>
                <Personal />
            </section>
            <section className='flex-[0.3 border border-gray-100 rounded-md p-3 max-md:hidden'>
                <ImageGuidelines />
            </section>
        </section>
    );
}
