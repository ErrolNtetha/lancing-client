import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from '../../atoms/button';
import { FormLabel } from '../../molecules/formLabel';
import { useForm } from 'react-hook-form';
// import { z } from 'zod';

export const LoginForm = () => {
    const [hidden, setHidden] = useState(true);

    /* const loginSchema = z.object({
        username: z.string().email({ message: 'Email is invalid.' }),
        password: z.string().min(6, { message: 'Your password must be 6 characters long.' })
    }); */

    const { register, handleSubmit, formState: { errors } } = useForm();

    const submitHandler = (data: any) => {
        console.log(data);
        console.log(errors);
    };
 
    return (
        <section className='flex justify-center items-center bg-hero-bg bg-cover h-[95vh]'>
            <section className='w-[20rem] md:w-[23rem]'>
                <form onSubmit={handleSubmit(submitHandler)} className='bg-white shadow-2xl w-full py-8 px-6'>
                    <h4 className='pb-6 pt-2 text-center font-bold divide-gray'> Login To Your Account </h4>
                    <FormLabel
                        type='text'
                        placeholder='Enter email or username'
                        labelName='Username'
                        register={register}
                        name='firstName'
                        required={true}
                        errors={errors.firstName?.type}
                    />
                    <FormLabel
                        type={hidden ? 'password' : 'text'}
                        placeholder='Enter password'
                        labelName='Password'
                        name='password'
                        hasHideIcon={true}
                        handleHideIcon={() => setHidden(!hidden)}
                        isHidden={hidden}
                        register={register}
                        required={true}
                        errors={errors.password?.type}
                    />
                    <Button
                        handleClick={submitHandler} 
                        buttonText='Login' 
                        className='bg-slate text-white px-3 py-2 mt-3 w-full hover:opacity-80' />
                    <section className='pt-4 text-sm'>
                        <p className='pb-2'> Forgot your password? <Link href='reset' className='underline'> Reset here. </Link> </p>
                        <p> Don&apos;t have an account? <Link href='register' className='underline'> Register now. </Link> </p>
                    </section>
                </form>
            </section>
        </section>
    );
};
