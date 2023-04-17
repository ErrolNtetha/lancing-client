/* eslint-disable @next/next/no-img-element */

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Header = () => {
    return (
        <header className='flex justify-between text-white bg-slate py-3 px-5 md:p-5'>
            <Image src='/images/logo.svg' alt='company logo' className='' width={80} height={20} />
            <nav className='md:flex items-center space-x-8 gap-8 peer:text-black hidden'>
                <ul className='md:flex space-x-8 peer:text-black hidden'>
                    <li className='text-sm cursor-pointer'> 
                        <Link href='#our-vision'> Our Vision </Link>
                    </li>
                    <li className='text-sm cursor-pointer'>
                        <Link href='#about'> About </Link>
                    </li>
                    <li className='text-sm cursor-pointer'>
                        <Link href='#contact'> Contact </Link>
                    </li>
                </ul>
                { /* <input type="text" placeholder='Search freelancers...' className='outline-none placeholder:text-sm py-1 px-4 text-black' /> */ }
            </nav>
        </header>
    );
};
