import React from 'react';
import { FcOpenedFolder } from 'react-icons/fc';

export default function VendorPortfolio() {
    return (
        <section className='flex justify-center items-center h-[400px]'>
            <section className='flex justify-center gap-3 items-center flex-col'>
                <FcOpenedFolder className='text-[8rem]' />
                <h2 className='font-semibold text-md'> No portfolio to show. </h2>
            </section>
        </section>
    );
};
