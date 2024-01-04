import Image from 'next/image';
import React from 'react'
import { Avatar } from '../../../molecules/image';
// import { Avatar, AvatarFallback, AvatarImage } from '../../../../@/components/ui/avatar';
import { StarRating } from '../../../molecules/star-rating';

type IProps = {
    names: {
        firstName: string;
        lastName: string;
    };
    title: string;
    bio: string;
    avatar: string;
}

export default function ProfileHeader({ names, title, bio, avatar }: IProps) {
    return (
        <>
            <section className='flex md:flex-col md:justify-center gap-3'>
                <Avatar
                    src={avatar}
                    alt={`${names?.firstName}&apos;s avatar`}
                    size='w-14 h-14'
                />
                <span className='flex flex-col'>
                    <h2 className='w-full font-semibold'> {names?.firstName} {names?.lastName} </h2>
                    <h4 className='w-full text-sm'> {title} </h4>
                    <span className='flex items-center gap-1 text-sm'> <StarRating value={4} /> (4/5) </span>
                </span>
            </section>
            <section className='w-full mt-3'>
                <p className='text-sm'> {bio} </p>
            </section>
        </>
  );
};
