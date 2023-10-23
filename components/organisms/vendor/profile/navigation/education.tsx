import React from 'react';
import { FcGraduationCap } from 'react-icons/fc';

export default function VendorEducation() {
    return (
        <section className='flex justify-center items-center h-[400px]'>
            <section className='flex justify-center gap-3 items-center flex-col'>
                <FcGraduationCap className='text-[8rem]' />
                <h2 className='font-semibold text-md'> No qualifications to show. </h2>
            </section>
        </section>
    );
};
