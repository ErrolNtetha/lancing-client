import React from 'react';

export type ButtonProps = {
    handleCancel: React.MouseEventHandler<HTMLButtonElement>;
    handleRedirect: React.MouseEventHandler<HTMLButtonElement>;
};

export const Apply = ({ handleCancel, handleRedirect }: ButtonProps) => {
    return (
        <React.Fragment>
            <section className='py-4'>
                <p> Create an application to interact with client and send proposals. It takes about 7 minutes. </p>
                <br />
                <p> All our freelancers are required to apply and meet our standards and policies. </p>
            </section>
            <section className='flex gap-2 items-center'>
                <button type='button' onClick={handleCancel} className='border border-gray flex-1 p-3'> Cancel </button>
                <button type='button' onClick={handleRedirect} className='bg-slate flex-1 text-white p-3'> Apply Now </button>
            </section>
        </React.Fragment>
    );
};
