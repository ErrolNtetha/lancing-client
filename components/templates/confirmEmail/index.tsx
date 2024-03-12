'use client'

import { sendEmailVerification } from 'firebase/auth';
import React from 'react';
import { Button } from '../../../@/components/ui/button';
import { useAuth } from '../../../hooks/useAuth';
import { MoonLoader } from 'react-spinners';
import withAuth from '../../../hoc/withAuth';

/*
 * TO DO:
 * Sends verification email to the user 
 *
 */

function Email() {
    const { currentUser } = useAuth();
    const [loading, setLoading] = React.useState(false);
    const [isSuccessful, setIsSuccessful] = React.useState<null | boolean>(null);
    const [isUnSuccessful, setIsUnSuccessful] = React.useState(false);

    const handleSendEmail = () => {
        setLoading(true);
        setIsUnSuccessful(false);

        sendEmailVerification(currentUser)
            .then(() => setIsSuccessful(true))
            .catch(() => setIsUnSuccessful(true))
            .finally(() => setLoading(false));
    };

    return (
        <section className='md:container flex justify-center md:max-w-lg m-4 h-[92vh]'>
            <section className='text-sm text-center px-4 py-6'>
                <h1 className='text-3xl mt-3 text-center font-extrabold'> Almost there </h1>
                <h3 className=''> Please verify your email address. </h3>

                <p className='py-8'> We have sent a verification email to <span className='font-semibold'>{currentUser?.email}</span>. You need to verify your email address to finish up setting your account. </p>

                <span className='flex flex-col justify-center items-center w-full'>
                    <p className='block'> Didn&apos;t get the email? </p>
                    <Button className='block px-4 mt-2' disabled={loading} onClick={handleSendEmail}>
                        {loading ? 
                            (
                                <section className='flex items-center gap-3'>
                                    Sending... 
                                </section>
                            )
                            : 'Resend Email '
                        }
                    </Button>
                    {isSuccessful && <p className='text-green-900 mt-4'> Email has been successfully sent. Check your emails. </p> }
                    {isUnSuccessful && <p className='text-red-900 mt-4'> Something went wrong. Please try again later or contact us. </p>}
                </span>
            </section>
        </section>
    );
};

export default withAuth(Email);
