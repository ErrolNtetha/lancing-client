import React from 'react';
import { Apply } from './apply';
import { ButtonProps, Declined } from './declined';
import { Pending } from './pending';

interface NoticeProps extends ButtonProps {
    progress: string | null;
    reason: string | null;
}

export const Notice = ({ progress, reason, handleCancel, handleRedirect }: NoticeProps) => {
    const header = progress === 'pending' || 'declined'
        ?  'Application Status'
        :  'Create Application'

    return (
        <section className='p-3'>
            <section>
                <h3 className='text-center text-lg font-semibold'> {header} </h3>
                <hr className='opacity-10' />
            </section>

            {progress === 'pending' 
                ? <Pending />
                : progress === 'declined'
                ? <Declined 
                    handleRedirect={handleRedirect}     
                    handleCancel={handleCancel}
                    reason={reason}
                />
                : <Apply  
                    handleRedirect={handleRedirect}     
                    handleCancel={handleCancel}
                />
            }
        </section>
    );
};
