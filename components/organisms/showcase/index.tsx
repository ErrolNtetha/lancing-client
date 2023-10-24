import React from 'react';
import Image from 'next/image';
import { ScrollArea, ScrollBar } from '../../../@/components/ui/scroll-area';

const works = [
    {
        title: 'Graphic Design and Multimedia',
        subtext: 'Some random long text for subtext.',
        image: '/assets/images/home/6.jpg'
    },
    {
        title: 'Creative Art and Entertainment',
        subtext: 'Some random text for subtext',
        image: '/assets/images/home/5.jpg'
    },
    {
        title: 'Programming and Software Development',
        subtext: 'Some random text for subtext',
        image: '/assets/images/home/4.jpg'
    },
];

export default function Showcase() {
    return (
        <section className='container p-6 bg-gray-100'>
            <section>
                <h1 className='font-extrabold uppercase text-2xl'> Where skills shine, <br /> dreams thrive. </h1>
                <p> Browse through hundreds of telented freelancers from around the country. </p>
            </section>
            <ScrollArea className='w-96 whitespace-nowrap py-6'>
                <section className='flex w-max space-x-4'>
                    {works.map((item) => (
                        <figure key={item.title} className='shrink-0'>
                            <section className='overflow-hidden rounded-md'>
                                <Image 
                                    src={item.image}
                                    alt='Mphumeleli'
                                    className='aspect-[3/4] h-fit w-fit object-cover'
                                    width={300}
                                    height={400}
                                />
                            </section>             
                            <figcaption className='pt-2 w-max aspect-[3/4] h-fit w-fit'>
                                <h1 className='font-extrabold text-lg'>{item.title}</h1> 
                                <p> {item.subtext} </p>
                            </figcaption>
                        </figure>
                ))}
            </section>            
            <ScrollBar orientation='horizontal' />
        </ScrollArea>
    </section>
);
};
