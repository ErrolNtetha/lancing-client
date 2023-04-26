/* eslint-disable @next/next/no-img-element */

import Image from 'next/image';
import React, { useState } from 'react';
// import { useScreenWidth } from '../../../hooks/useScreenWidth';
import { FiAlignRight } from 'react-icons/fi';
import { Button } from '../../atoms/button';
import { MobileMenu } from './mobileMenu';

export const Header = () => {
    const [nav, setNav] = useState(false);

    const handleLogout = () => console.log('logged out');

    return (
        <header className='flex z-10 justify-between items-center sticky text-white bg-slate h-[5vh] px-6'>
            <Image src='/images/logo.svg' alt='company logo' className='' width={80} height={20} />
            <FiAlignRight onClick={() => setNav(!nav)} className='hover:cursor-pointer text-[1.8rem]' />
            {nav && (
                <section className='fixed backdrop-blur-md top-0 left-0 bottom-0 w-full'>
                    <MobileMenu handleMenuToggle={() => setNav(!nav)} />
                    <section className='flex-col justify-center absolute w-full left-0 bottom-2'>
                        <Button
                            className='bg-slate font-extrabold w-full p-2 my-1 mx-4'
                            buttonText='Logout'
                            handleClick={handleLogout}
                        />
                    </section>
                </section>
            )}
        </header>
    );
};
