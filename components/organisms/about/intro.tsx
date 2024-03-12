import React from 'react'
import { COMPANY_NAME } from '../../../constants/companyName';

export default function AboutIntro() {
    return (
        <section className='flex justify-start items-center bg-primary md:container h-80 text-background pt-8 bg-[url("/assets/images/svg/bg.svg")] bg-cover object-cover'>
            <section>
                <h1 className='font-semibold text-4xl'>
                    <span className='text-xl text-gray-100'> Discovering </span> <br /> {COMPANY_NAME} 
                </h1>
                <p className='max-w-md'>
                    The South African freelancing platform for businesses to find top talents.
                </p>
            </section>
        </section>
    );
}
