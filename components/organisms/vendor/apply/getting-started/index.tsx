'use client'

import React from 'react';
// import GettingStartedSidebar from './gettingStartedSidebar';
import Welcome from './welcome';

export default function GettingStarted() {
    return (
        <section className='container flex justify-between'>
            <section className='flex-[0.6]'>
                <Welcome />
            </section>
            <section className='flex-[0.3] rounded-md p-3 max-md:hidden' />
        </section>
    );
}
