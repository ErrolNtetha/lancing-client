import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from '../../atoms/button';
import { FormLabel } from '../../molecules/formLabel';

export const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [hidden, setHidden] = useState(true);

    const submitHandler = () => {
        console.log('submit: ', username, password);
        setUsername('');
        setPassword('');
    }
    
    return (
        <section className='flex justify-center items-center bg-hero-bg bg-cover h-[95vh]'>
            <section className='w-[20rem] md:w-[23rem]'>
                <section  className='bg-white shadow-2xl w-full py-8 px-6'>
                    <h4 className='pb-6 pt-2 text-center font-bold divide-gray'> Login To Your Account </h4>
                    <FormLabel
                        type='text'
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder='Enter username'
                        value={username}
                        htmlFor='username'
                        labelName='Username'
                        name='username'
                    />
                    <FormLabel
                        type={hidden ? 'password' : 'text'}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Enter password'
                        value={password}
                        htmlFor='password'
                        labelName='Password'
                        name='password'
                        hasHideIcon={true}
                        handleHideIcon={() => setHidden(!hidden)}
                    />
                    <Button
                        handleClick={submitHandler} 
                        buttonText='Login' 
                        className='bg-slate text-white px-3 py-2 mt-3 w-full hover:opacity-80' />
                    <section className='pt-4 text-sm'>
                        <p className='pb-2'> Forgot your password? <Link href='reset' className='underline'> Reset here. </Link> </p>
                        <p> Don&apos;t have an account? <Link href='register' className='underline'> Register now. </Link> </p>
                    </section>
                </section>
            </section>
        </section>
    );
};
