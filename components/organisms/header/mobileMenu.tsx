import Link from 'next/link';
import React from 'react';
import { FiX } from 'react-icons/fi';
import { DigitCounter } from '../../molecules/digitCounter';
import { Avatar } from '../../molecules/image';
import { Nav } from '../../molecules/nav';

type MenuProps = {
    handleMenuToggle: React.MouseEventHandler<HTMLSpanElement>;
    auth: object | null;
    name: {
        firstName: string;
        lastName: string;
    };
    email: string;
    avatar: string;
    isClient: boolean;
    totalMessages: number;
};

export const MobileMenu = ({ handleMenuToggle, isClient, auth, name, avatar, totalMessages }: MenuProps) => {
    const accountType = isClient ? 'Client Account' : 'Freelancer Account';
    return (
        <section className='relative p-3'>
            <button
                className='absolute right-0 p-2 hover:cursor-pointer text-[1.8rem]'
                onClick={handleMenuToggle}
            >
                <FiX className='text-white' />
            </button>
            {auth && (
                <section className='flex py-2 items-center mb-3 gap-2'>
                    <Avatar
                        src={avatar}
                        size='w-12 h-12'
                        alt={`${name.firstName} avatar`}
                    />
                    <span className='self-start'>
                        <h3 className='text-white font-semibold'> {name.firstName} {name.lastName} </h3>
                        <p className='text-sm font-semibold text-[blue]'> {accountType} </p>
                    </span>
                </section>
            )}
            {auth && (
                <section className='bg-gray-100 p-2 mb-4 rounded-lg'>
                    <ul className='text-black divide-y divide-slate divide-opacity-10'>
                        <Link href='/messages'><li className={`flex items-center justify-between  ${totalMessages && 'font-bold'} p-1 hover:bg-opacity-10 hover:cursor-pointer`}> Messages <DigitCounter count={totalMessages} /> </li></Link>
                        {/* <li className='flex items-center justify-between p-1 hover:cursor-pointer'> Notifications </li> */}
                        {isClient && <Link href='/myprojects'><li className='flex items-center justify-between p-1 hover:cursor-pointer'> My Projects </li></Link>}
                        {!isClient && <Link href='/mylistings'> <li className='flex items-center justify-between p-1 hover:cursor-pointer'> My Lists </li> </Link>}
                        {!isClient && <li className='flex items-center justify-between p-1 hover:cursor-pointer'> Offers </li>}
                    </ul>
                </section>
            )}
            {!auth && <Nav />}
        </section>
    );
};
