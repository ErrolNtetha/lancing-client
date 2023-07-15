import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiX } from 'react-icons/fi';
import { Nav } from '../../molecules/nav';

type MenuProps = {
    handleMenuToggle: React.MouseEventHandler<HTMLSpanElement>;
    isLoggedIn: boolean | null;
    name: {
        firstName: string;
        lastName: string;
    },
    avatar: string;
};

export const MobileMenu = ({ handleMenuToggle, isLoggedIn, name, avatar }: MenuProps) => {
    const { firstName, lastName } = name;

    return (
        <section className='relative p-3'>
            <button
                className='absolute right-0 p-2 hover:cursor-pointer text-[1.8rem]'
                onClick={handleMenuToggle}
            >
                <FiX />
            </button>
            {isLoggedIn && (
                <section className='flex p-2 items-center mb-3 divide divide-gray gap-2'>
                    <Image 
                        src={avatar}
                        width={60}
                        height={60}
                        alt={`${firstName} avatar`}
                        className='rounded-full ring-gray object-cover'
                    />
                    <span className='self-start'>
                        <h3 className='font-semibold'> {firstName} {lastName} </h3>
                        <Link href='https://github.com/ErrolNtetha'>
                            mphumi@outlook.com
                        </Link>
                    </span>
                </section>
            )}
            <Nav />
        </section>
    );
};
