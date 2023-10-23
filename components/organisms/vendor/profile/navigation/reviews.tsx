import React from 'react';
import {  FcSms } from 'react-icons/fc';

export default function VendorReviews() {
    return (
        <section className='flex justify-center items-center h-[400px]'>
            <section className='flex justify-center gap-3 items-center flex-col'>
                <FcSms className='text-[8rem]' />
                <h2 className='font-semibold text-md'> No reviews to show. </h2>
            </section>
        </section>
    );
};
