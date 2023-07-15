import Link from 'next/link';
import React from 'react';
import { FiX } from 'react-icons/fi';
import { Avatar } from '../../molecules/image';
import { Nav } from '../../molecules/nav';

type MenuProps = {
    handleMenuToggle: React.MouseEventHandler<HTMLSpanElement>;
    isLoggedIn: boolean | null;
    name: {
        firstName: string;
        lastName: string;
    },
    avatar: string | null;
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
                    <Avatar
                        src={avatar}
                        size={16}
                        alt={`${firstName} avatar`}
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
