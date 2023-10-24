import React from 'react';
import Image from 'next/image';
import { ScrollArea, ScrollBar } from '../../../@/components/ui/scroll-area';

const works = [
    {
        title: 'Graphic Design and Multimedia',
        subtext: 'Logo Design, Website Design, UI/UX Design, Packaging Design, Animation, Video Editing, etc.',
        image: '/assets/images/home/6.jpg'
    },
    {
        title: 'Creative Art and Entertainment',
        subtext: 'Music Composition, Sound Design, Voiceover, Acting, Scriptwriting, Screenwriting, etc.',
        image: '/assets/images/home/5.jpg'
    },
    {
        title: 'Programming and Software Development',
        subtext: 'Web Development, App Development, Game Development, QA Testing, Cybersecurity, DevOps, etc.',
        image: '/assets/images/home/4.jpg'
    },
];

export default function Showcase() {
    return (
        <section className='container p-6 bg-gray-100'>
            <section>
                <h1 className='font-extrabold uppercase text-2xl'> Where skills shine, <br /> dreams thrive. </h1>
                <p> Browse through hundreds of talented freelancers from around the country. </p>
            </section>
            <ScrollArea className='w-96 whitespace-normal py-6'>
                <section className='flex space-x-4'>
                    {works.map((item) => (
                        <figure key={item.title} className='shrink-0'>
                            <section className='overflow-hidden rounded-md'>
                                <Image 
                                    src={item.image}
                                    alt='lorem'
                                    className='aspect-[3/4] h-fit w-fit object-cover'
                                    width={300}
                                    height={400}
                                />
                            </section>             
                            <figcaption className='pt-2 max-w-[300px]'>
                                <h1 className='font-extrabold text-lg'>{item.title}</h1> 
                                <p className='text-muted-foreground overflow-hidden text-ellipsis w-[400px]'> {item.subtext} </p>
                            </figcaption>
                        </figure>
                ))}
            </section>            
            <ScrollBar orientation='horizontal' />
        </ScrollArea>
    </section>
);
};
