import React, { useState } from 'react';
import { Button } from './atoms/button';

export const Subscribe = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [response, setResponse] = useState('');
    const [error, setError] = useState(false);
    const className = 'bg-slate hover:bg-gray hover:text-black hover:border-black text-white p-2 mt-8 shadow-lg block';

    const handleSubscribe = async (e) => {
        e.preventDefault();
        setFirstName('');
        setLastName('');
        setEmail('');

        try {
            const response = await fetch('localhost:5000');
            console.log('Response: ', response)
            setResponse('You have Subscribed successfully!')
            
        } catch (error) {
            console.log('An erorr: ', error);   
            if (error) setError(true);
        }
    };
    
    return (
        <section className='shadow-2xl text-black p-8 bg-white max-w-md m-4 sm:max-w-md border-black'>
            <p className='divide-solid font-extrabold max-w-2'> Subscribe to our newsletter. </p>
            <p className='text-sm max-w-md font-light'> Be a step ahead and receive updates straight to your inbox with our new coming platform. </p>
            <form action='onSubmit' className='space-y-4 mt-8'>
                <section>
                    <label htmlFor="firstName"> First Names </label>
                    <input type='text' name='firstName' autoComplete='off' className='p-2 outline-gray w-full block' placeholder='John' onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                </section>
                <section>
                    <label htmlFor="firstName"> Last Name </label>
                    <input type='text' className='p-2 outline-gray block w-full' placeholder='Doe' onChange={(e) => setLastName(e.target.value)} value={lastName} />
                </section>
                <section>
                    <label htmlFor="firstName"> Email </label>
                    <input type='email' className='p-2 outline-gray block w-full' placeholder='johndoe@example.com' onChange={(e) => setEmail(e.target.value)} value={email} />
                </section>
                <Button className={className} handleClick={handleSubscribe} />
            </form>
            {response ? <p className='pt-5 text-green block'> {response} </p> : error ? <p className='pt-5 text-green block'> There was an error subscribing. </p> : null}
        </section>
    )
}
