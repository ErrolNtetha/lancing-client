import React from 'react';
import { Button } from '../../../atoms/button';
import { Slide } from '../../../molecules/slider';
import { About } from './about';
import { PortfolioHeader } from './header';
import { Portfolio } from './portfolio';

type PortfolioProps = {
    name: {
        firstName: string;
        lastName: string;
    };
    title: string;
    handleModal: React.MouseEventHandler<HTMLElement>;
};

export const PortfolioModal = ({ name, title, handleModal }: PortfolioProps) => {
    const portfolio = [
        {
            coverImage: '/assets/images/cover.png',
            title: 'ABC LTD.',
            description: 'This is a description.',
            alt: 'Picture of vegetables'
        },
        {
            coverImage: '/assets/images/veges.jpg',
            title: 'Church Website',
            description: 'This is a church website i developed.',
            alt: 'Picture of vegetables'
        }
    ];
    
    return (
        <section className='relative p-2 min-h-[80vh]'>
            <section className='p-2'>
                <section className='divide-y divide-gray'>
                    <PortfolioHeader name={name} title={title} />
                    <hr className='opacity-80' />
                </section>
                <section className='pt-4'>
                    <h1 className='font-extrabold text-md py-2'> About </h1>
                    <About />
                    <section className='overflow-auto pb-4 pt-4'>
                        <h1 className='font-extrabold text-md py-2'> Portfolios ({portfolio.length}) </h1>
                        <section>
                            <Slide>
                                {portfolio.map((item, index) => (
                                    <section key={index}>
                                        <Portfolio alt={item.alt} coverImage={item.coverImage} title={item.title} />
                                    </section>
                                ))}
                            </Slide>
                        </section>
                    </section>
                </section>
            </section>

            <section className='fixed bottom-0 left-0 z-20 text-white w-full p-2'>
                <Button 
                    handleClick={handleModal} 
                    className='bg-slate text-white w-full p-2'
                    buttonText='Close' 
                />
            </section>
        </section>
    )
}
