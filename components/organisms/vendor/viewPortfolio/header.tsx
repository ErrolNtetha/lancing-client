import React from 'react'

type HeaderProps = {
    name: {
        firstName: string;
        lastName: string;
    };
    title: string;
}

export const PortfolioHeader = ({ name, title }: HeaderProps) => {
    return (
        <section className='mb-2'>
            <h2 className='text-center font-extrabold text-lg'> {name.firstName} {name.lastName} </h2>
            <h5 className='text-center text-md'> {title} </h5>
        </section>
    )
}
