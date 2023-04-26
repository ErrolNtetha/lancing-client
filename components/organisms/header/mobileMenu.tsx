import React from 'react';
import { FiX } from 'react-icons/fi';
import { Nav } from '../../molecules/nav';

type MenuProps = {
    handleMenuToggle: React.MouseEventHandler<HTMLSpanElement>;
};

export const MobileMenu = ({ handleMenuToggle }: MenuProps) => {

    return (
        <section className='relative'>
            <span className='absolute right-0 p-2 hover:cursor-pointer text-[1.8rem]' onClick={handleMenuToggle}> <FiX /> </span>
            <Nav />
        </section>
    );
};
