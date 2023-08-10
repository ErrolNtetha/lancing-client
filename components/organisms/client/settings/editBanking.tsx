import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../../atoms/button';
import { FormLabel } from '../../../molecules/formLabel';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Select } from '../../../atoms/select';
// import { useProfileStore } from '../../../../hooks/useGlobalStore';
import { useAuth } from '../../../../hooks/useAuth';

const bankingSchema = z.object({
    accountHolder: z.string(),
    accountNumber: z.string(),
    branchCode: z.string().min(4, 'Branch code too short.').max(8, 'Branch too long.')
});

export const EditBanking = () => {
    const userAuth = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            accountHolder: `${userAuth?.dislayName}`,
            accountNumber: '10128807421',
            branchCode: '051001',
            bankName: 'Nedbank'.toLowerCase().trim()
        },
        resolver: zodResolver(bankingSchema)
    });
    const handleUpdate = (data: any) => console.log(data);

    return (
        <form onSubmit={handleSubmit(handleUpdate)}>
            <Select 
                title='Select bank'
                options={['Standard Bank', 'Nedbank', 'Capitec', 'Absa', 'African Bank', 'Tymebank']}
                name='bankName'
                register={register}

            />
            <Select 
                title='Account Type'
                options={['Savings', 'Cheque']}
                name='accountType'
                register={register}

            />
            <FormLabel
                type='text'
                labelName='Account Holder'
                placeholder='Njabulo Wiseman Ndlovu'
                name='accountHolder'
                register={register}
                required={true}
                errorMessage={errors.accountHolder?.message}
            />
            <FormLabel
                type='number'
                labelName='Account Number'
                placeholder='Enter your account number'
                name='accountNumber'
                register={register}
                required={true}
                errorMessage={errors.accountNumber?.message}
            />
            <FormLabel
                type='number'
                labelName='Branch Code'
                placeholder='Enter branch code'
                name='branchCode'
                register={register}
                required={true}
                errorMessage={errors.branchCode?.message}
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
