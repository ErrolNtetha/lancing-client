'use client'

import { zodResolver } from '@hookform/resolvers/zod';
import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '../../../@/components/ui/button';
import { db } from '../../../firebaseConfig';
import { FormLabel } from '../formLabel';

const subscribeSchema = z.object({
    email: z.string({ required_error: 'Email is required.' }).email({ message: 'Email is invalid.' }),
}).required({ email: true });

export const Subscribe = () => {
    const [response, setResponse] = useState('');
    const [error, setError] = useState(false);
    const className = 'bg-primary hover:bg-gray-100 hover:text-black hover:border-black text-white py-2 px-3 w-full mt-8 shadow-lg block';
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(subscribeSchema),
    });

    const handleSubscribe = async (data: any) => {
        if (!data.email) {
            return;
        }

        const subscribersCollection = collection(db, 'subscribers');

        try {
            await addDoc(subscribersCollection, data);
            setResponse('You have subscribed successfully!')
            
        } catch (error) {
            console.log('An erorr: ', error);   
            setError(true);
        }
    };
    
    return (
        <section className='shadow-2xl text-black p-8 bg-white max-w-md m-4 sm:max-w-md border-black'>
            <p className='divide-solid font-extrabold max-w-2'> Subscribe to our newsletter. </p>
            <p className='text-sm max-w-md font-light'> Be a step ahead and receive updates straight to your inbox. </p>
            <form action='onSubmit' onSubmit={handleSubmit(handleSubscribe)} className='mt-8'>
                <FormLabel
                    name='email'
                    type='email'
                    placeholder='Enter your email address'
                    labelName='Email Address'
                    required={true}
                    register={register}
                    errorMessage={errors?.email?.message?.toString()}
                />
                <Button onClick={handleSubscribe} className={className}>
                    {`${isSubmitting ? 'Subscribing...' : 'Subscribe'}`}
                </Button>

            </form>
            {response ? <p className='pt-5 text-[green] block'> {response} </p> : error ? <p className='pt-5 text-[red] block'> There was an error subscribing. </p> : null}
        </section>
    )
}
