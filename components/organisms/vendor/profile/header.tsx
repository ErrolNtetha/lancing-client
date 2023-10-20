import Image from 'next/image';
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../../../../@/components/ui/avatar';

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
        <section className='md:container m-2'>
            <section className='flex flex-col items-center justify-center gap-3'>
                <section className='relative border border-gray rounded-full w-[60px] h-[60px]'>
                    <Avatar className='w-full h-full'>
                        <AvatarImage src={avatar} alt='dsfad' />
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
                <span className='flex flex-col items-center'>
                    <h2 className='font-semibold'> {names?.firstName} {names?.lastName} </h2>
                    <h4> {title} </h4>
                </span>
            </section>
            <section className='mt-3'>
                <p className='text-sm text-center'> {bio} </p>
            </section>
        </section>
  )
}
