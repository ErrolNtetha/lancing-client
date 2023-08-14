import React from 'react';
import { FiX } from 'react-icons/fi';
// import { DigitCounter } from '../../molecules/digitCounter';
import { Avatar } from '../../molecules/image';
import { Nav } from '../../molecules/nav';

type MenuProps = {
    handleMenuToggle: React.MouseEventHandler<HTMLSpanElement>;
    auth: object | null;
    displayName: string;
    email: string;
    avatar: string;
    isClient: boolean;
};

export const MobileMenu = ({ handleMenuToggle, isClient, auth, displayName, avatar }: MenuProps) => {
    const accountType = isClient ? 'Client Account' : 'Freelancer Account';
    return (
        <section className='relative p-3'>
            <button
                className='absolute right-0 p-2 hover:cursor-pointer text-[1.8rem]'
                onClick={handleMenuToggle}
            >
                <FiX />
            </button>
            {auth && (
                <section className='flex py-2 items-center mb-3 gap-2'>
                    <Avatar
                        src={avatar}
                        size='w-12 h-12'
                        alt={`${displayName} avatar`}
                    />
                    <span className='self-start'>
                        <h3 className='font-semibold'>{displayName}</h3>
                        <p className='text-sm font-semibold text-[green]'> {accountType} </p>
                    </span>
                </section>
            )}
        {/* <section className='bg-gray p-2 mb-4 rounded-lg'>
                <ul className='text-black font-bold divide-y divide-slate divide-opacity-10'>
                    <li className='flex items-center justify-between p-1 hover:bg-opacity-10 hover:cursor-pointer'> My Projects <DigitCounter count={2} /> </li>
                    <li className='flex items-center justify-between p-1 hover:cursor-pointer'> Replies </li>
                    <li className='flex items-center justify-between p-1 hover:cursor-pointer'> Reviews <DigitCounter count={4} /> </li>
                </ul>
            </section> */}
            <Nav />
        </section>
    );
};
