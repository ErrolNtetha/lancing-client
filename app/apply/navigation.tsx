import React from 'react';

export const Navigation = () => {
    return (
        <section className='hidden md:block flex-1 md:flex-[0.2] h-max p-2'>
            <ul className='p-2 divide-gray'>
                <li className='p-2 hover:cursor-pointer hover:bg-gray'> Personal Information </li>
                <li className='p-2 hover:cursor-pointer hover:bg-gray'> Social Media </li> 
                <li className='p-2 hover:cursor-pointer hover:bg-gray'> Portolio </li>
                <li className='p-2 hover:cursor-pointer hover:bg-gray'> Certifications </li>
                <li className='p-2 hover:cursor-pointer hover:bg-gray'> Work History </li>
            </ul>
        </section>
    );
};
