import Image from 'next/image';
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../../../../@/components/ui/avatar';
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
        <section className=''>
            <section className='flex md:flex-col md:justify-center gap-3'>
                <section className='relative border border-gray rounded-full w-[60px] h-[60px] md:w-[80px] md:h-[80px]'>
                    <Avatar className='w-full h-full'>
                        <AvatarImage src={avatar} alt='My avatar' />
                        <AvatarFallback>
                            <Image
                                src='/assets/images/svg/profileIcon.svg'
                                alt='random image'
                                width={60}
                                height={60}
                            />
                        </AvatarFallback>
                    </Avatar>
                </section>
                <span className='flex flex-col'>
                    <h2 className='w-full font-semibold'> {names?.firstName} {names?.lastName} </h2>
                    <h4 className='w-full'> {title} </h4>
                    <span className='flex items-center gap-1'> <StarRating value={4} /> (4/5) </span>
                </span>
            </section>
            <section className='w-full mt-3'>
                <p className='text-sm'> {bio} </p>
            </section>
        </section>
  )
}
