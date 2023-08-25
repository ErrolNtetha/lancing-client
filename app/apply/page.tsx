import React from 'react';
import { CreateApplication } from './createApplication';
// import { Navigation } from './navigation';

const Apply = () => {
    return (
        <section className='h-[92vh]'>
            <section className='container flex justify-center px-3 md:p-0 gap-4 '>
                <CreateApplication />
            </section>
        </section>
    );
};

export default Apply;
