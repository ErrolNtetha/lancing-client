'use client'

import { sendEmailVerification } from 'firebase/auth';
import React from 'react';
import { FcInvite } from 'react-icons/fc';
import { Button } from '../../../@/components/ui/button';
import { useAuth } from '../../../hooks/useAuth';

/*
 * TO DO:
 * Sends verification email to the user 
 *
 */

export default function Email() {
    const { currentUser } = useAuth();
    console.log(currentUser);

    const handleSendEmail = () => {
        sendEmailVerification(currentUser)
            .then(() => console.log('Email sent. Check your inbox.'))
            .catch((error) => console.log('An error occurred: ', error));
    };

    return (
        <section className='md:container flex justify-center md:max-w-lg m-4 h-[92vh]'>
            <section className='text-sm text-center px-4 py-6'>
                <span className=''>
                <FcInvite className='text-6xl' />
                </span>
                <h1 className='text-3xl mt-3 text-center font-extrabold'> Almost there </h1>
                <h3 className=''> Please verify your email address. </h3>

                <p className='py-8'> We have sent a verification email to <span className='font-semibold'>{currentUser?.email}</span>. You need to verify your email address to finish up setting your account. </p>

                <span className='flex flex-col justify-center items-center w-full'>
                    <p className='block'> Didn&apos;t get the email? </p>
                    <Button className='block font-semibold mt-2' onClick={handleSendEmail}> Resend Email </Button>
                </span>
            </section>
        </section>
    );
};
