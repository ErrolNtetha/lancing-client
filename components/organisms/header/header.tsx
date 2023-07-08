'use client'
/* eslint-disable @next/next/no-img-element */

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FiAlignRight } from 'react-icons/fi';
import { useProfileStore } from '../../../hooks/useGlobalStore';
import { Button } from '../../atoms/button';
import { MobileMenu } from './mobileMenu';

export const Header = () => {
    const [nav, setNav] = useState(false);
    const p = useProfileStore();
    const { profile } = p;
    const router = useRouter();

    const handleLogout = () => {
        console.log('logged out')
        setNav(!nav);
        router.push('/login')
    };

    return (
        <header className='flex z-10 justify-between items-center text-white w-full bg-slate h-[8vh]'>
            <section className='container p-4 mx-auto w-full h-full flex z-10 justify-between items-center'>
                <Link href='/'>
                    <Image src='/images/logo.svg' alt='company logo' className='' width={80} height={20} />
                </Link>
                <FiAlignRight onClick={() => setNav(!nav)} className='hover:cursor-pointer text-[1.8rem] block md:hidden' />
                <section className='hidden md:flex ml-auto'>
                    <ul className='p-0 md:flex'>
                        <li className='ml-4 mr-4' >
                            <Link className='block w-full' href='/feed'>Home</Link>
                        </li>
                        <li className='ml-4 mr-4'>
                            <Link className='block w-full' href='/browse'>Browse</Link>
                        </li>
                        <li className='ml-4 mr-4'>
                            <Link href='/contact'>Contact</Link>
                        </li>
                        <li className='ml-4 mr-4'>
                            <Link href='/about'>About</Link>
                        </li>
                        <li className='ml-4 mr-4'>
                            <Link href='/settings'>Settings</Link>
                        </li>
                    </ul>
                </section>
                {nav && (
                    <section className='fixed bg-slate top-0 left-0 bottom-0 w-full'>
                        <MobileMenu avatar={profile.avatar} name={profile.name} handleMenuToggle={() => setNav(!nav)} />
                        <section className='flex items-center justify-center absolute w-full left-0 bottom-4'>
                            <Button
                                className='border-2 border-white font-extrabold w-full p-2 my-1 mx-4'
                                buttonText='Logout'
                                handleClick={handleLogout}
                            />
                        </section>
                    </section>
                )}
            </section>
        </header>
    );
};
