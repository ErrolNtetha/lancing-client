import React from 'react';
import { FiCheck } from 'react-icons/fi';

type Props = {
    component: React.ReactNode;
    register: Function;
    account: string;
};

export const AccountType = ({ component, register, account }: Props) => {
    const vendorClass = 'flex items-center gap-4 justify-between border border-gray hover:cursor-pointer hover:bg-[#eee] w-full p-2';
    const clientClass = 'flex items-center gap-4 justify-between border border-gray w-full hover:cursor-pointer hover:bg-[#eee] p-2';

    return (
        <section className='w-full'>
            <h1 className='text-center font-extrabold text-lg'> Account Type </h1>
            <section>
                <section className='my-4'>
                    <input type='radio' value='client' {...register('accountType')} id='client' name='accountType' className='hidden' />
                    <label className={clientClass} id='client' htmlFor='client'>
                        <span>
                            <section> Register a </section>
                            <h1 className='text-lg font-extrabold'> Client Account </h1>
                            <p className='w-70'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt beatae esse </p>
                        </span>
                        <span className={`p-[.2em] border-[.3em] ${account === 'client' && 'bg-[green]'} rounded-full border-[green]`}>
                            {account === 'client' && <FiCheck className='text-lg text-[white] font-extrabold' />}
                        </span>
                    </label>
                </section>
                <section className=''>
                    <input type='radio' value='vendor' {...register('accountType')} id='vendor' name='accountType' className='hidden' />
                    <label className={vendorClass} id='vendor' htmlFor='vendor'>
                        <span>
                            <section> Register a </section>
                            <h1 className='text-lg font-extrabold'> Vendor Account </h1>
                            <p className='w-70'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum minus. </p>
                        </span>
                        <span className={`p-[.2em] border-[.3em] ${account === 'vendor' && 'bg-[green]'} rounded-full border-[green]`}>
                            {account === 'vendor' && <FiCheck className='text-lg text-[white] font-extrabold' />}
                        </span>
                    </label>
                </section>
            </section>
            
            <section className='mt-4 block'>
                {component}
            </section>
        </section>
    );
};
