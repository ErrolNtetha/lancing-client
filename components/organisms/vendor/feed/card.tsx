import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';
import { AspectRatio } from '../../../../@/components/ui/aspect-ratio';
import { formatAmount } from '../../../../utilities/format';
import { Avatar } from '../../../molecules/image';
import { StarRating } from '../../../molecules/star-rating';

type CardProps = {
    names: {
        firstName: string;
        lastName: string;
    };
    description: string;
    cover: any;
    id: number;
}

export default function Card({
    names,
    description,
    cover,
    id,
}: CardProps
) {
    return (
        <section className='text-black text-[.8rem] md:text-sm rounded-md border border-gray bg-white shadow-md w-full md:w-[20rem] max-h-max p-2'>
            <section>
                <section className='flex items-center justify-between mb-4'>
                    <span className='flex gap-2'>
                        <Avatar
                            src='/assets/images/errol.png'
                            alt={`${names.firstName}&apos;s avatar`}
                            size='w-12 h-12'
                        />
                        <section>
                            <Link href={`/vendors/${id}`} className='text-sm font-semibold'>{names.firstName} {names.lastName} </Link>
                            <p className='flex items-center gap-1'> Logo Designer  </p>
                            <span className='flex items-center gap-1'> <StarRating value={5} /> ({5}/5) </span>
                        </section>
                    </span>
                    <FiMoreHorizontal className='self-start text-md' />
                </section>
                <p className='mb-4 text-sm'> {description} </p>
                <section className='w-full border border-gray-100'>
                    <AspectRatio ratio={16/9}>
                        <Image src={cover} fill={true} alt='An image' className='rounded-md object-cover' />
                    </AspectRatio>
                </section>
                <hr className='opacity-10 mb-2' />
                
                <section className='flex justify-between items-center text-sm'>
                        <section />
                        <span className=''>
                            <h6 className='font-bold text-sm text-gray-600'> STARTING FROM </h6>
                            <h2 className='flex font-bold'> 
                                <span className='text-sm'> R </span> 
                                <span className='text-2xl'>{formatAmount(320)}<span className='text-sm'>/hr</span> </span>
                            </h2>
                        </span>
                </section>
            </section>
        </section>
    );
};
