import React from 'react';

interface Props {
    children: React.ReactNode;
}

export const Modal = ({ children }: Props) => {
    return (
        <section className='text-sm fixed top-0 left-0 bottom-0 w-full flex justify-center items-center bg-white-o backdrop-blur-md'>
            <section className='bg-white-p shadow-md border border-gray max-h-[80%] w-[90%] overflow-y-auto md:w-[30%] relative'> 
                {children}
            </section>
        </section>
    );
};
