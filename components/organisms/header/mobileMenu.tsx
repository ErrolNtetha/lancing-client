import React from 'react';
import { FiX } from 'react-icons/fi';
import { Avatar } from '../../molecules/image';
import { Nav } from '../../molecules/nav';

type MenuProps = {
    handleMenuToggle: React.MouseEventHandler<HTMLSpanElement>;
    auth: object | null;
    names: {
        firstName: string;
        lastName: string;
    },
    email: string;
    avatar: string;
};

export const MobileMenu = ({ handleMenuToggle, auth, names, email, avatar }: MenuProps) => {
    const { firstName, lastName } = names;

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
                        alt={`${firstName} avatar`}
                    />
                    <span className='self-start'>
                        <h3 className='font-semibold'> {firstName} {lastName} </h3>
                        <p className='text-sm'> {email} </p>
                    </span>
                </section>
            )}
            <Nav />
        </section>
    );
};
