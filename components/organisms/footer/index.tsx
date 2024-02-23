'use client'

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiFacebook, FiLinkedin } from 'react-icons/fi';
import { MdOutlineWhatsapp } from 'react-icons/md';
import { COMPANY_NAME } from '../../../constants/companyName';
import { useAuth } from '../../../hooks/useAuth';
import { getCurrentYear } from '../../../utilities/time';

export const Footer = () => {
    const { currentUser } = useAuth();
    const iconClassName = 'text-2xl';

    return (
        <footer className='max-md:p-3 md:container bg-slate text-white'>
            <section className='flex justify-between gap-3 text-sm md:text-md px-4 py-6'>
                <section>
                    <h4 className='font-bold text-md mb-2'> Company </h4>
                    <ul className='space-y-2'>
                        <li>
                            <Link href='/'> Home </Link>
                        </li>
                        <li>
                            <Link href='/contact-us'> Contact </Link>
                        </li>
                        <li>
                            <Link href='/faq'> FAQs </Link>
                        </li>
                        <li>
                            <Link href='/about'> About Us </Link>
                        </li>
                        {!currentUser && (
                            <li>
                                <Link href='/login'> Login </Link>
                            </li>
                        )}
                    </ul>
                </section>
                <section className='self-end'>
                    <section>
                        <p className='text-right'> Follow us: </p>
                        <ul className='mb-3 text-sm flex items-center justify-end gap-3'>
                            <li> 
                                <Link href='www.facebook.com' target='_blank'> <FiFacebook className={iconClassName} /> </Link> 
                            </li>
                            <li> 
                                <Link href='www.linkedin.com' target='_blank'> <FiLinkedin className={iconClassName} /> </Link> 
                            </li>
                            <li>
                                <Link href='/'> <MdOutlineWhatsapp className={iconClassName} /> </Link>
                            </li>
                        </ul>
                        <span className='flex'>
                            <Image src='/images/logo.svg' alt='Company logo' className='fill-current self-end text-white' width={80} height={80} />
                        </span>
                    </section>
                    </section>
            </section>
            <section className='flex items-center justify-center text-sm p-2'>
                <p> &#169; {COMPANY_NAME}, {getCurrentYear()}. All Rights Reserved. </p>
            </section>
        </footer>
    );
};
