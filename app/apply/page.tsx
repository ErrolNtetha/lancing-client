import React from 'react';
import { CreateApplication } from './createApplication';
import { Navigation } from './navigation';

const Apply = () => {
    return (
        <section className='h-[92vh]'>
            <section className='container flex px-6 md:p-0 gap-4 '>
                <Navigation />
                <CreateApplication />
            </section>
        </section>
    );
};

export default Apply;
