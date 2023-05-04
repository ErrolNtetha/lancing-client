import React from 'react';
import { getCurrentYear } from '../../../utilities/time';

export const Footer = () => {
    return (
        <footer className='flex items-center justify-center bg-slate text-white text-xs w-full p-2'>
            <p> &#169; Duello, {getCurrentYear()}. All Rights Reserved. </p>
        </footer>
    );
};
