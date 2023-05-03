import React from 'react';
import { Button } from '../../atoms/button';
import { Slide } from '../../molecules/slider';

type PortfolioProps = {
    handleModal: React.MouseEventHandler<HTMLElement>;
};

export const PortfolioModal = ({ handleModal }: PortfolioProps) => {
    return (
        <section className='relative p-2 min-h-[80vh]'>
            <section className='p-2'>
                <section className='divide-y divide-gray'>
                    <h2 className='font-extrabold text-lg pb-2 text-center'> Syabonga Dlamini </h2>
                    <hr className='opacity-80' />
                </section>
                <section className='pt-4'>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores mollitia dolor voluptatem voluptate ratione modi quidem vero illo, et nihil quae facilis quas id molestias, aspernatur corrupti sit. Magni, illum.</p>
                    <section className='overflow-auto pt-4'>
                        <h1 className='font-extrabold text-md py-2'> Portfolio (13 photos) </h1>
                        <section className='max-h-full'>
                            <Slide />
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
