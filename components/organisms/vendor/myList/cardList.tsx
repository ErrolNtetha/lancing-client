import Image from 'next/image';
// import Link from 'next/link';
import React from 'react';
import { FiCircle, FiFolder } from 'react-icons/fi';
import { AspectRatio } from '../../../../@/components/ui/aspect-ratio';
import { formatAmount } from '../../../../utilities/format';

type CardListProps = {
    cover: string;
    category: string;
    description: string;
    isActive: boolean;
    packages: {
        price: number;
        rate: string;
        level: string;
    }[];
}

export default function CardList({ cover, isActive, category, description, packages }: CardListProps) {
    const minimumPrice: number = packages.reduce((minPrice, currentPackage) => Math.min(minPrice, currentPackage.price), Infinity);
    const toggleColor = isActive ? 'text-[green]' : 'text-[red]';

    return (
        <section className='rounded-md text-sm p-3 border border-gray-300'>
            <p className='flex items-center gap-2'> <FiFolder /> <span className='font-bold text-xs'> {category} </span></p>
            <p className='mb-4 mt-2 text-md'> {description} </p>
            <section className='w-full border border-gray-100'>
                <AspectRatio ratio={16/9}>
                    <Image src={cover} fill={true} alt='An image' className='rounded-md object-cover' />
                </AspectRatio>
            </section>
            <hr className='opacity-10 mb-2' />
            <section className='flex justify-between'>
                <span>
                    <h2 className='font-bold text-sm text-gray-600'> STARTING FROM </h2>
                    <h2 className='flex font-bold float-left'> 
                        <span className='text-2xl'>
                            {formatAmount(minimumPrice)}<span className='text-sm'>/hr</span> 
                        </span>
                    </h2>
                </span>
                <p className={`${toggleColor} font-bold flex items-center gap-1`}> <FiCircle className={`${toggleColor} ${isActive ? 'fill-[green]' : 'fill-[red]'} text-xs`}/> {isActive ? 'Active' : 'Inactive'}</p>
            </section>
        </section>
    );
};
