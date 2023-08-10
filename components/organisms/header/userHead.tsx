import React from 'react';
import { Avatar } from '../../molecules/image';

type UserHeadProps = {
    avatar: string;
    displayName: string;
    email: string;
}

export const UserHead = ({ avatar, displayName, email }: UserHeadProps) => {
    return (
        <section className='hidden md:flex p-2 items-center justify-center gap-2 hover:cursor-pointer'>
            <Avatar
                src={avatar}
                size='w-12 h-12'
                alt='My avatar'
            />
            <span className='flex-col align-center justify-center gap-2'>
                <h6 className='text-sm font-bold'> {displayName} </h6>
                <p className='text-xs'>{email}</p>
            </span>
        </section>
    );
};
