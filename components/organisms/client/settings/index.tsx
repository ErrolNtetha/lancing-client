import Link from 'next/link';
import React from 'react';
import { FiCreditCard, FiLock, FiUser } from 'react-icons/fi';

export const ClientSettings = () => {
    return (
        <>
            <h2 className='p-1 bg-gray flex items-center gap-2'> <FiUser /> Personal Details </h2>
            <Link href='/settings/edit-profile' className='block px-2 py-1'> Edit profile </Link>
            <hr className='opacity-20' />
            <Link href='/banking-details' className='block px-2 py-1'> Confirm banking details </Link>

            <h2 className='p-1 bg-gray flex items-center gap-2'> <FiCreditCard /> Payments & Withdrawals </h2>
            <Link href='/banking-details' className='block px-2 py-1'> Update your banking details </Link>
            <hr className='opacity-20' />
            <Link href='/verify-banking-details' className='block px-2 py-1'> Verify banking details </Link>

            <h2 className='p-1 bg-gray flex items-center gap-2'> <FiLock /> Account & Password </h2>
            <Link href='/password-reset' className='block px-2 py-1'> Reset your password </Link>
            <hr className='opacity-20' />
            <Link href='/change-password' className='block px-2 py-1'> Change password </Link>
            <hr className='opacity-20' />
            <Link href='/delete-account' className='block px-2 text-[red] py-1'> Delete your account </Link>
            <hr className='opacity-20' />
        </>
    );
};
