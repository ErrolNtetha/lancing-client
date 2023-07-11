import Link from 'next/link';
import React from 'react';
import { Button } from '../../atoms/button';
import { FormLabel } from '../../molecules/formLabel';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebaseConfig';
import { z } from 'zod';

const loginSchema = z.object({
    username: z.string().email({ message: 'Your email is invalid.' }),
    password: z.string().min(6, { message: 'Your password must be 6 characters long.' })
});

export const LoginForm = () => {
    const [hidden, setHidden] = React.useState(true);
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: zodResolver(loginSchema)
    });
    const showIcon = watch('password');

    const handleLogin = async (data: any) => {
        const { username, password } = data;
        if (!(username && password)) {
            return;
        }

        try {
            const response = await signInWithEmailAndPassword(auth, username, password);
            console.log('Response: ', response);
        } catch (error) {
            if (error) {
                console.log('Erorr message: ', error);
            }
        };
    };
   
    return (
        <section className='flex justify-center items-center bg-hero-bg bg-cover h-[95vh]'>
            <section className='w-[20rem] md:w-[23rem]'>
                <form onSubmit={handleSubmit(handleLogin)} className='bg-white text-xs md:text-sm shadow-2xl w-full p-6'>
                    <section className='pb-4'>
                        <h1 className='pt-2 text-xl font-extrabold'> Welcome to Duello </h1>
                        <h5 className='inline text-[gray] font-bold'> New here? </h5> <Link href='/register' className='font-bold text-[green]'> Create Account </Link>
                    </section>
                    <FormLabel
                        type='text'
                        placeholder='Enter username'
                        labelName='Username'
                        name='username'
                        register={register}
                        required={true}
                        errorMessage={errors?.username && errors?.username?.message?.toString()}
                    />
                    <FormLabel
                        type={hidden ? 'password' : 'text'}
                        placeholder='Enter password'
                        labelName='Password'
                        name='password'
                        hasHideIcon={false}
                        handleHideIcon={() => setHidden(!hidden)}
                        isHidden={hidden}
                        register={register}
                        required={true}
                        errorMessage={errors?.password && errors?.password?.message?.toString()}
                        inputHasValue={showIcon ? true : false}
                    />
                    <Button
                        handleClick={handleLogin} 
                        buttonText='Login' 
                        className='bg-slate text-white px-3 py-2 mt-3 w-full hover:opacity-80'
                    />
                    <section className='pt-4 text-xs md:text-sm'>
                        <p className='pb-2'> Forgot your password? <Link href='reset' className='underline'> Reset here. </Link> </p>
                    </section>
                    </form>
            </section>
        </section>
    );
};
