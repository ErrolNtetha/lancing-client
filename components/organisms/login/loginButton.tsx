import Link from 'next/link';
import React from 'react';

export const LoginButton = () => {
    return (
        <Link href='/login' className='hidden md:block ml-3 border-2 py-1 px-5 hover:cursor-pointer hover:bg-gray'>
            Login
        </Link>
    );
};
