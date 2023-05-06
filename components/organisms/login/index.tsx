import Link from 'next/link';
import React from 'react';
import { Button } from '../../atoms/button';
import { FormLabel } from '../../molecules/formLabel';
import { useForm } from 'react-hook-form';
// import { z } from 'zod';

    /* const loginSchema = z.object({
        username: z.string().email({ message: 'Email is invalid.' }),
        password: z.string().min(6, { message: 'Your password must be 6 characters long.' })
    }); */

export const LoginForm = () => {
    const [hidden, setHidden] = React.useState(true);
    const { register, handleSubmit } = useForm();
    const handleLogin = (data: any) => console.log(data);
 
    return (
        <section className='flex justify-center items-center bg-hero-bg bg-cover h-[95vh]'>
            <section className='w-[20rem] md:w-[23rem]'>
                <form onSubmit={handleSubmit(handleLogin)}  className='bg-white text-xs md:text-sm shadow-2xl w-full p-6'>
                    <h4 className='pb-6 pt-2 text-center font-bold divide-gray'> Login To Your Account </h4>
                    <FormLabel
                        type='text'
                        placeholder='Enter username'
                        labelName='Username'
                        name='username'
                        register={register}
                        required={true}
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
                    />
                    <Button
                        handleClick={handleLogin} 
                        buttonText='Login' 
                        className='bg-slate text-white px-3 py-2 mt-3 w-full hover:opacity-80'
                    />
                    <section className='pt-4 text-xs md:text-sm'>
                        <p className='pb-2'> Forgot your password? <Link href='reset' className='underline'> Reset here. </Link> </p>
                        <p> Don&apos;t have an account? <Link href='register' className='underline'> Register now. </Link> </p>
                    </section>
                    </form>
            </section>
        </section>
    );
};
