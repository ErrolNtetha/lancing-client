import React from 'react';

type NoContentProps = {
    main: React.ReactNode;
    body?: React.ReactNode;
}

export const NoContent = ({ main, body }: NoContentProps) => {
    return (
        <section className='flex justify-center items-center h-full'> 
            <span className='text-center w-[80%]'>
                <p className='font-bold'> {main} </p>
                <p className='py-3 text-sm md:text-md'> {body} </p>
            </span>
        </section>
    );
};
