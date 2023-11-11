import Image from 'next/image';
// import Link from 'next/link';
import React from 'react';
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

    return (
        <section className='rounded-md text-sm p-3 border border-gray-100'>
            <p> In <span className='font-bold text-xs'> {category} </span></p>
            <p className='my-4 text-xl'> {description} </p>
            <section className='w-full border border-gray-100'>
                <AspectRatio ratio={16/9}>
                    <Image src={cover} fill={true} alt='An image' className='rounded-md object-cover' />
                </AspectRatio>
            </section>
            <hr className='opacity-10 mb-2' />
            <section className='flex justify-between'>
                <span>
                    <h2 className='font-bold text-gray-600'> STARTING FROM </h2>
                    <h2 className='flex font-bold'> 
                        <span className='text-sm'> R </span> 
                        <span className='text-2xl'> {formatAmount(minimumPrice)}<span className='text-sm'>/hr</span> </span>
                    </h2>
                </span>
                <p className={`${isActive ? 'text-[green]' : 'text-[red]'} font-bold`}>{isActive ? 'Active' : 'Inactive'}</p>
            </section>
        </section>
    );
};
