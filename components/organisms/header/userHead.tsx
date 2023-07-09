import React from 'react';
import { ImageSrc } from '../../molecules/image';

export const UserHead = () => {
    return (
        <section className='hidden md:flex align-center justify-center gap-2 hover:bg-gray hover:cursor-pointer'>
            <ImageSrc
                src='/assets/images/errol.png'
                size={10}
                alt='Smiling picture of the creator of Duello'
            />
            <span className='flex-col align-center justify-center gap-2'>
                <h6 className='text-sm font-bold'> Mphumeleli Ntetha </h6>
                <p className='text-xs'> mphumier@outlook.com </p>
            </span>
        </section>
    );
};
