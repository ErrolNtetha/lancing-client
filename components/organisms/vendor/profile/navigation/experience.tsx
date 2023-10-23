import React from 'react';
import { FcBriefcase, FcOpenedFolder } from 'react-icons/fc';

export default function VendorExperience() {
    return (
        <section className='flex justify-center items-center h-[400px]'>
            <section className='flex justify-center gap-3 items-center flex-col'>
                <FcBriefcase className='text-[8rem]' />
                <h2 className='font-semibold text-md'> No work experience to show. </h2>
            </section>
        </section>
    );
};
