'use client'

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { Button } from '../../components/atoms/button';
import { Navigation } from '../../components/organisms/navigation';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../firebaseConfig';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Personal } from './personal';
import { SocialMedia } from './socialMedia';
import { Portfolio } from './portfolio';
import { useAuth } from '../../hooks/useAuth';

const registrationSchema = z.object({
    about: z.string().min(30, 'About is too short. It must be at least 30 characters long.'),
    portfolioTitle: z.string().min(5, { message: 'Title must be at least 5 characters long.' }).max(15, { message: 'Title is too long.' }),
    portfolioDescription: z.string().min(50, { message: 'Description must be at least 50 characters long.' }),
});

export const CreateApplication = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [firstPage, setFirstPage] = useState<boolean | null>(true);
    const [lastPage, setLastPage] = useState(false);
    const { register, watch, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registrationSchema)
    });
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<null | string>(null);
    const router = useRouter();
    const showIcon = watch('password');
    const userAuth = useAuth();
    console.log(userAuth);
 
    const handleNext = () => {
        if (currentPage !== (forms.length - 1)) {
            setCurrentPage((prevState) => prevState + 1);
            setLastPage(false);
        } else if (currentPage === (forms.length - 1)) {
            setLastPage(true);
            return null;
        }
    };

    const handlePrev = () => {
        if (currentPage !== 0) {
            setCurrentPage((prevState) => prevState - 1);
            setFirstPage(false);
            setLastPage(false);
        } else if (currentPage === 0) {
            setCurrentPage(0);
            setFirstPage(true);
            return null;
        } 
    };

    const onSubmit = async (data: any) => {
        /*
         * 1. Add the doc in the portfolio collection
         * 2. Update the client doc with more fields like service, school...
         * 3. 
         *
         */

        if (!data) {
            return;
        }

        console.log('Form data: ', data);

        const { 
            about,
            avatar,
            portfolioTitle,
            portfolioDescription
        } = data; 

        setLoading(true);
        setErrorMessage(null);

        try {
            const userRef = doc(db, 'users', userAuth.uid);

            if (auth.currentUser) {
                await setDoc(userRef, {
                    about,
                    avatar,
                    portfolioTitle,
                    portfolioDescription
                });
            }
            router.push('/feed');

        } catch (error: any) {
            console.log(error);
            switch(error.code) {
                case 'auth/email-already-in-use':
                    setErrorMessage('This email has already been used. Try a different email.');
                    break;

                case 'auth/network-request-failed':
                    setErrorMessage('Thre was a problem with your network. Check if you have internet connection.');
                    break;

                default:
                    setErrorMessage('An error occured while trying to register your account.');
            }

        } finally {
            setLoading(false);
        }
    };

    const renderLoading = loading ? 'Submitting application...' : 'Submit Application';
    const buttonText = `${lastPage ? renderLoading : 'Proceed'}`;

    const navButton = (
        <section className='flex items-center justify-between'> 
            <section />
            <section className='flex items-center gap-2'>
                {firstPage && (currentPage === 0)
                    ? null 
                    : (
                    <Button
                        buttonText='Back'
                        handleClick={() => handlePrev()}
                        className='border border-gray hover:opacity-80 px-4 py-2 text-black'
                    />
                )}
                <Button
                    type={lastPage ? 'submit' : 'button' }
                    buttonText={buttonText}
                    // @ts-ignore
                    handleClick={() => lastPage ? onSubmit() : handleNext()}
                    disabled= {loading ? true : false}
                    className={`hover:opacity-80 px-4 py-2 text-white ${loading ? 'bg-gray hover:cursor-not-allowed' : 'bg-slate hover:cursor-pointer'}`}
                />
            </section>
        </section>
    );

    const forms = [
        <Personal
            key={0} 
            register={register} 
            component={navButton} 
        />,
        <SocialMedia
            key={1}
            register={register}
            component={navButton}
        />,
        <Portfolio
            key={2}
            register={register}
            component={navButton}
            errors={errors}
        />
    ];

    useEffect(() => {
        if (currentPage === forms.length - 1) {
            setLastPage(true);
        } else if (currentPage === 0) {
            setLastPage(false);
            setFirstPage(true);
        }
        else {
            setFirstPage(true);
        }
    }, [currentPage, forms.length]);

    
    return (
            <section className='flex-1 md:flex-[0.4]'>
                <Navigation handleSwitch={() => setCurrentPage(1)} />
                <section className='py-4'>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex-[0.3] text-xs sm:text-sm h-max'>
                        {forms[currentPage]}
                        {errorMessage && (
                            <section className=' text-center text-[red] py-4 flex justify-center mt-4'>
                                <p> {errorMessage} </p>
                            </section>
                        )}
                    </form>
                </section>
                <section className='hidden' />
            </section>
    );
};
