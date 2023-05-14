import React from 'react';

type Props = {
    component: React.ReactNode;
    register: Function;
};

export const AccountType = ({ component, register }: Props) => {
    return (
        <section>
            <h1 className='text-center font-extrabold text-md'> Account Type </h1>
            <section>
                <section className='my-4'>
                    <input type='radio' value='client' {...register('accountType')} id='client' name='accountType' className='hidden' />
                    <label className='block border border-gray w-full hover:cursor-pointer hover:bg-[#eee] p-2' id='client' htmlFor='client'>
                        <section> Register a </section>
                        <h1 className='text-lg font-extrabold'> Client Account </h1>
                        <p> Find freelancers and get your work done in minutes. </p>
                    </label>
                </section>
                <section className=''>
                    <input type='radio' value='vendor' {...register('accountType')} id='vendor' name='accountType' className='hidden' />
                    <label className='block border border-gray hover:cursor-pointer hover:bg-[#eee] w-full p-2' id='vendor' htmlFor='vendor'>
                        <section> Register a </section>
                        <h1 className='text-lg font-extrabold'> Vendor Account </h1>
                        <p> Find freelancers and get your work done in minutes. </p>
                    </label>
                </section>
            </section>
            
            <section className='mt-4 block'>
                {component}
            </section>
        </section>
    );
};
