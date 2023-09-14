'use client'

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { Button } from '../../components/atoms/button';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Personal } from './personal';
import { Portfolio } from './portfolio';
import { useAuth } from '../../hooks/useAuth';
import { WorkExperience } from './workExperience';
import { Education } from './education';
import { Welcome } from './welcome';

const registrationSchema = z.object({
    bio: z.string().min(30, 'About is too short. It must be at least 30 characters long.'),
    title: z.string().min(2, 'Title is too short. It must be at least 30 characters long.'),
}).required({
    bio: true,
});

export const CreateApplication = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [firstPage, setFirstPage] = useState<boolean | null>(true);
    const [lastPage, setLastPage] = useState(false);
    const { register, watch, getValues, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registrationSchema)
    });
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<null | string>(null);
    const router = useRouter();
    const showIcon = watch('password');
    const userAuth = useAuth();
 
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

    const onSubmit = (data: any) => {
        console.log('Data: ', data);
        console.log('Errors: ', errors);
        return;

        if (!data) {
            console.log('no data to submit!');
            return;
        }

        setLoading(true);
        setErrorMessage(null);

        const submitPersonalDetails = async function() {
            try {
                const userRef = doc(db, 'users', userAuth?.uid);
                await setDoc(userRef, {
                    ...data,
                }, { merge: true });
            } catch (error) {
                console.log('Personal: ', error);
            }
        };

        const handleSubmitApplication = async function() {
            const response = await Promise.all([
                submitPersonalDetails(),
            ]);
            console.log('Server reponse: ', response);
            return response;
        };

        handleSubmitApplication().catch((error) => console.log('Final reponse: ', error));
    };

    const renderLoading = loading ? 'Submitting application...' : 'Submit Application';
    const isFirstPage = (currentPage === 0) ? 'Get Started' : 'Next Step';
    const buttonText = `${lastPage ? renderLoading : isFirstPage}`;

    const navButton = (
        <section className='fixed md:relative bg-white bottom-0 left-0 w-full p-2 md:p-0 mt-4 flex items-center justify-between'> 
            <section className='flex items-center gap-2 w-full md:w-md'>
                {firstPage && (currentPage === 0)
                    ? null 
                    : (
                    <Button
                        buttonText='Back'
                        handleClick={() => handlePrev()}
                        className='border border-gray flex-1 hover:opacity-80 px-4 py-2 text-black'
                    />
                )}
                <Button
                    type={lastPage ? 'submit' : 'button' }
                    buttonText={buttonText}
                    // @ts-ignore
                    handleClick={() => lastPage ? onSubmit() : handleNext()}
                    disabled= {loading ? true : false}
                    className={`hover:opacity-80 px-4 py-2 flex-1 text-white ${loading ? 'bg-gray hover:cursor-not-allowed' : 'bg-slate hover:cursor-pointer'}`}
                />
            </section>
        </section>
    );

    const forms = [
        <Welcome
            key={9} 
            component={navButton} 
        />,
        <Personal
            key={0} 
            register={register} 
            component={navButton} 
            errors={errors}
        />,
        <Education
            key={1}
            register={register}
            component={navButton}
            errors={errors}
            getValues={getValues}
        />,
        <WorkExperience
            key={2}
            register={register}
            component={navButton}
            errors={errors}
            getValues={getValues}
        />,
        <Portfolio
            key={3}
            register={register}
            component={navButton}
            errors={errors}
            getValues={getValues}
        />,
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
            <section className='divide-y-0 divide-gray md:flex-[0.4]'>
                <section className='mt-3 md:p-4'>
                    <form onSubmit={handleSubmit(onSubmit)} className='text-xs sm:text-sm h-max'>
                        {forms[currentPage]}
                        {errorMessage && (
                            <section className=' text-center text-[red] py-4 flex justify-center mt-4'>
                                <p> {errorMessage} </p>
                            </section>
                        )}
                    </form>
                </section>
            </section>
    );
};
