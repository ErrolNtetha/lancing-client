import Link from 'next/link';
import React from 'react';

export const Nav = () => {
    return (
        <nav className='md:flex items-center space-x-8 gap-8'>
            <ul className='md:flex text-white md:text-black'>
                <li className='text-md cursor-pointer py-2'> 
                    <Link href='/'> Home </Link>
                </li>
                <li className='text-md cursor-pointer py-2'>
                    <Link href='/about'> About </Link>
                </li>
                <li className='text-md cursor-pointer py-2'>
                    <Link href='/contact'> Contact </Link>
                </li>
                <li className='text-md cursor-pointer py-2'>
                    <Link href='/about'> About </Link>
                </li>
                <li className='text-md cursor-pointer py-2'>
                    <Link href='/faq'> FAQ </Link>
                </li>
            </ul>
        </nav>
    );
};
