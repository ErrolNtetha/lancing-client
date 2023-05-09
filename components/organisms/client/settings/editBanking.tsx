import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../../atoms/button';
import { FormLabel } from '../../../molecules/formLabel';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const bankingSchema = z.object({
    accountHolder: z.string(),
    accountNumber: z.string()
});

export const EditBanking = () => {
    const { register, handleSubmit } = useForm({
        resolver: zodResolver(bankingSchema)
    });
    const handleUpdate = (data: any) => console.log(data);

    return (
        <form onSubmit={handleSubmit(handleUpdate)}>
            <FormLabel
                type='text'
                labelName='Account Holder'
                placeholder='Mr Njabulo Wiseman Ndlovu'
                name='accountHolder'
                register={register}
                required={true}
            />
            <FormLabel
                type='tel'
                labelName='Account Number'
                placeholder='Enter your account number'
                name='accountNumber'
                register={register}
                required={true}
            />
            <FormLabel
                type='tel'
                labelName='Branch Code'
                placeholder='Enter branch code'
                name='branchCode'
                register={register}
                required={true}
            />
            <section className='flex items-center gap-2 mt-4'>
                <Link href='/settings' className='border flex-1 border-gray text-center p-2'>
                    Cancel
                </Link>
                <Button
                    buttonText='Update'
                    handleClick={handleUpdate}
                    className='bg-slate flex-1 text-white p-2'
                />
            </section>
        </form>
    );
};
