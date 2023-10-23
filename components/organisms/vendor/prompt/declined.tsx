import React from 'react';

export type ButtonProps = {
    handleCancel: React.MouseEventHandler<HTMLButtonElement>;
    handleRedirect: React.MouseEventHandler<HTMLButtonElement>;
    reason: string | null;
};

export const Declined = ({ handleCancel, handleRedirect, reason }: ButtonProps) => {
    return (
        <React.Fragment>
            <section className='py-4'>
                <p> Your application was <span className='text-[red] font-semibold uppercase'>declined</span>. </p>
                <br />
                <p className='text-[red]'> {reason} </p>
                <br />
                <p> Please check your emails for more details. </p>
            </section>
            <section className='flex gap-2 items-center'>
                <button type='button' onClick={handleCancel} className='border border-gray flex-1 p-3'> Cancel </button>
                <button type='button' onClick={handleRedirect} className='bg-slate flex-1 text-white p-3'> Re-Apply </button>
            </section>
        </React.Fragment>
    );
};
