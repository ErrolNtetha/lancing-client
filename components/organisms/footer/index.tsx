import React from 'react';
import { COMPANY_NAME } from '../../../constants/companyName';
import { getCurrentYear } from '../../../utilities/time';

export const Footer = () => {
    return (
        <footer className='flex items-center justify-center bg-slate text-white text-xs w-full p-2'>
            <p> &#169; {COMPANY_NAME}, {getCurrentYear()}. All Rights Reserved. </p>
        </footer>
    );
};
