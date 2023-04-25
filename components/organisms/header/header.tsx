/* eslint-disable @next/next/no-img-element */

import Image from 'next/image';
import React, { useState } from 'react';
// import { useScreenWidth } from '../../../hooks/useScreenWidth';
import { Nav } from '../../molecules/nav';
import { FiAlignRight, FiX } from 'react-icons/fi';

export const Header = () => {
    const [nav, setNav] = useState(false);

    return (
        <header className='flex z-10 justify-between items-center sticky text-white bg-slate h-[5vh] px-6'>
            <Image src='/images/logo.svg' alt='company logo' className='' width={80} height={20} />
            <FiAlignRight onClick={() => setNav(!nav)} className='hover:cursor-pointer text-[1.8rem]' />
            {nav && (
                <section className='fixed backdrop-blur-md top-0 left-0 bottom-0 w-full'>
                    <section className='relative'>
                        <span className='absolute right-0 p-2 hover:cursor-pointer text-[1.8rem]' onClick={() => setNav(!nav)}> <FiX /> </span>
                        <Nav />
                    </section>
                </section>
            )}
        </header>
    );
};
