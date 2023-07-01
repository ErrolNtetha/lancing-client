import React from 'react';

interface Props {
    handleSwitch: React.MouseEventHandler;
}

export const Navigation = ({ handleSwitch }: Props) => {
    return (
        <section className='py-4 px-2 border border-opacity-20 border-gray max-h-full text-white w-[18rem] md:w-[20rem] hidden'>
            <ul>
                <li className='p-3 hover:cursor-pointer'>Personal Details</li>
                <li className='p-3 hover:cursor-pointer hover:border-gray hover:border' onClick={handleSwitch}>Work Experience</li>
                <li className='p-3 hover:cursor-pointer'>Portfolio Projects</li>
                <li className='p-3 hover:cursor-pointer'>Confirmation</li>
            </ul>
        </section>
    );
};
