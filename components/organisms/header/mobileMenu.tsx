import React from 'react';
import { FiX } from 'react-icons/fi';
import { Avatar } from '../../molecules/image';
import { Nav } from '../../molecules/nav';

type MenuProps = {
    handleMenuToggle: React.MouseEventHandler<HTMLSpanElement>;
    auth: object | null;
    displayName: string;
    email: string;
    avatar: string;
};

export const MobileMenu = ({ handleMenuToggle, auth, displayName, email, avatar }: MenuProps) => {
    return (
        <section className='relative p-3'>
            <button
                className='absolute right-0 p-2 hover:cursor-pointer text-[1.8rem]'
                onClick={handleMenuToggle}
            >
                <FiX />
            </button>
            {auth && (
                <section className='flex p-2 items-center mb-3 divide divide-gray gap-2'>
                    <Avatar
                        src={avatar}
                        size='w-12 h-12'
                        alt={`${displayName} avatar`}
                    />
                    <span className='self-start'>
                        <h3 className='font-semibold'>{displayName}</h3>
                        <p className='text-sm'> {email} </p>
                    </span>
                </section>
            )}
            <Nav />
        </section>
    );
};
