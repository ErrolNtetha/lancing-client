import React from 'react';
import { About } from './about';
import { Features } from './features';
import { ShowCase } from './showCase';
import { Vision } from './vision';

export const OurVision = () => {
    return (
        <section className=''>
            <About />
            <Features />
            <Vision />
            <ShowCase />
        </section>
    );
};
