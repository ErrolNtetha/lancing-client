'use client'

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useProfileStore } from '../../../../../hooks/useGlobalStore';
import { Avatar } from '../../../../molecules/image';

export default function ApplyHeader() {
    const { profile } = useProfileStore();

    return (
        <header className='flex shadow divide-solid divide-gray bg-background sticky top-0 z-10 justify-between transition-all duration-200 items-center w-full h-[8vh]'>
            <section className='container px-4 w-full h-full flex z-10 justify-between items-center'>
                <Link href='/' className='max-w-full'>
                    <Image src='/assets/images/svg/blackLogo.svg' alt='Company logo' className='fill-current text-white' width={120} height={120} />
                </Link>
                <section className='relative flex items-center justify-center gap-3'>
                    <Avatar
                        src={profile?.avatar}
                        size='w-8 h-8'
                        alt='My avatar'
                    />
                </section>
            </section>
        </header>
    );
}
