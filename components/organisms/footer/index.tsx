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
            <section className='flex flex-col justify-center gap-3 text-sm md:text-md px-4 py-6'>
                <section className='flex justify-center items-center'>
                    <ul className='flex items-center divide divide-gray-200 space-x-3'>
                        <li>
                            <Link href='/'> Home </Link>
                        </li>
                        <li>
                            <Link href='/contact-us'> Contact </Link>
                        </li>
                        <li>
                            <Link href='/faq'> FAQ </Link>
                        </li>
                        <li>
                            <Link href='/about'> About </Link>
                        </li>
                        {!currentUser && (
                            <li>
                                <Link href='/login'> Login </Link>
                            </li>
                        )}
                    </ul>
                </section>
                <section className=''>
                    <section>
                        <ul className='mb-3 text-sm flex items-center justify-center gap-3'>
                            <li> 
                                <Link href='www.facebook.com' target='_blank'> <FiFacebook className={iconClassName} /> </Link> 
                            </li>
                            <li> 
                                <Link href='www.linkedin.com' target='_blank'> <FiLinkedin className={iconClassName} /> </Link> 
                            </li>
                            <li>
                                <Link href='https://whatsapp.com/channel/0029VaPxChUFCCodaRqssH1M'> <MdOutlineWhatsapp className={iconClassName} /> </Link>
                            </li>
                        </ul>
                        <span className='flex items-center justify-center'>
                            <Image src='/images/logo.svg' alt='Company logo' className='fill-current self-end text-white' width={80} height={80} />
                        </span>
                    </section>
                </section>
            </section>
            <section className='flex items-center justify-center text-xs p-2'>
                <p> &#169; {COMPANY_NAME}, {getCurrentYear()}. All Rights Reserved. </p>
            </section>
        </footer>
    );
};
