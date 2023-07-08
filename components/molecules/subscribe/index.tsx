'use client'

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../atoms/button';
import { FormLabel } from '../formLabel';

export const Subscribe = () => {
    const [response, setResponse] = useState('');
    const [error, setError] = useState(false);
    const className = 'bg-slate hover:bg-gray hover:text-black hover:border-black text-white py-2 px-3 mt-8 shadow-lg block';
    const { register, handleSubmit, formState } = useForm();

    const handleSubscribe = async (data: any) => {
        try {
            const response = await fetch('http://localhost:3000', {
                method: 'POST',
            });
            setResponse('You have subscribed successfully!')
            
        } catch (error) {
            console.log('An erorr: ', error);   
            setError(true);
        }
    };
    
    return (
        <section className='shadow-2xl text-black p-8 bg-white max-w-md m-4 sm:max-w-md border-black'>
            <p className='divide-solid font-extrabold max-w-2'> Subscribe to our newsletter. </p>
            <p className='text-sm max-w-md font-light'> Be a step ahead and receive updates straight to your inbox with our new coming platform. </p>
            <form action='onSubmit' onSubmit={handleSubmit(handleSubscribe)} className='mt-8'>
                <FormLabel
                    name='firstName'
                    type='text'
                    placeholder='Enter your first name'
                    labelName='First Name'
                    required={true}
                    register={register}
                />
                <FormLabel
                    name='lastName'
                    type='text'
                    placeholder='Enter your last name'
                    labelName='First Name'
                    required={true}
                    register={register}
                />
                <FormLabel
                    name='email'
                    type='email'
                    placeholder='Enter your email address'
                    labelName='Email Address'
                    required={true}
                    register={register}
                />
                <Button buttonText={`${formState.isSubmitting ? 'Subscribing...' : 'Subscribe'}`} className={className} handleClick={handleSubscribe} />
            </form>
            {response ? <p className='pt-5 text-[green] block'> {response} </p> : error ? <p className='pt-5 text-[red] block'> There was an error subscribing. </p> : null}
        </section>
    )
}
