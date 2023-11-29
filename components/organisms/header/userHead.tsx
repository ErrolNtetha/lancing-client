import React from 'react';
import { Avatar } from '../../molecules/image';

type UserHeadProps = {
    avatar: string;
    names: {
        firstName: string;
        lastName: string;
    }
    isClient: boolean;
}

export const UserHead = ({ avatar, names, isClient }: UserHeadProps) => {
    const accountType = isClient ? 'Client Account' : 'Freelancer Account';

    return (
        <section className='hidden md:flex p-2 items-center justify-center gap-2 hover:cursor-pointer'>
            <Avatar
                src={avatar}
                size='w-8 h-8'
                alt='My avatar'
            />
            <span className='flex-col align-center justify-center gap-2'>
                <h6 className='text-sm font-bold'> {names?.firstName} {names?.lastName} </h6>
                <p className='text-sm font-semibold text-[green]'> {accountType} </p>
            </span>
        </section>
    );
};
