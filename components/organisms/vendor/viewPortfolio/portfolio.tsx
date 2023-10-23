import Image from 'next/image';
import React from 'react';

type PortfolioProps = {
    coverImage: string;
    title: string;
    alt: string;
}

export const Portfolio = ({ coverImage, title, alt }: PortfolioProps) => {
    return (
        <section className='border border-1 border-gray p-2'>
            <section className='relative w-full h-36 border border-gray'>
                <Image
                    src={coverImage}
                    fill={true}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    alt={alt}
                />
            </section>
            <section className='mt-3'>
                <h1 className='font-extrabold text-md'> {title} </h1>
                <p className='py-1 mb-4'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil libero temporibus fugit dicta vitae harum aspernatur ratione, quo dolorum ducimus doloribus doloremque est. </p>
            </section>
        </section>
    );
};
