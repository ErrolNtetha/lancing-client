import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';
import { AspectRatio } from '../../../@/components/ui/aspect-ratio';
import { Button } from '../../../@/components/ui/button';
import { VendorProps } from '../../../types';
import { formatAmount } from '../../../utilities/format';
import { Avatar } from '../../molecules/image';
import { StarRating } from '../../molecules/star-rating';

export const VendorComponent = ({
    names,
    description,
    cover,
    id,
}: VendorProps) => {

    return (
        <section className='text-black text-[.8rem] md:text-sm my-3 border border-gray bg-white shadow-md w-full md:w-[35rem] max-h-max p-2'>
            <section>
                <section className='flex items-center justify-between mb-4'>
                    <span className='flex gap-2'>
                        <Avatar
                            src='/assets/images/errol.png'
                            alt={`${names.firstName}&apos;s avatar`}
                            size='w-13 h-13'
                        />
                        <section>
                            <Link href={`/vendors/${id}`} className='text-md md:text-lg font-semibold'>{names.firstName} {names.lastName} </Link>
                            <p className='flex items-center gap-1'> Logo Designer  </p>
                            <span className='flex items-center gap-1'> <StarRating value={4} /> ({4}/5) </span>
                        </section>
                    </span>
                    <FiMoreHorizontal className='self-start text-md' />
                </section>
                <p className='mb-4'> {description} </p>
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

