import React from 'react';
import WorkExperience from './experience';

export default function WorkExperiencePage() {
    return (
        <section className='container divide divide-x-2 flex justify-between'>
            <section className='md:flex-[0.6]'>
                <WorkExperience />
            </section>
            <section className='flex-[0.3] p-3 max-md:hidden' />
        </section>
    );
}
