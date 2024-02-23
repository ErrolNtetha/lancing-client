import React from 'react';
import Education from './education';

export default function EducationPage() {
    return (
        <section className='container px-md divide divide-x-2 flex justify-between'>
            <section className='md:flex-[0.6]'>
                <Education />
            </section>
            <section className='flex-[0.3] rounded-md p-3 max-md:hidden' />
        </section>
    );
}
