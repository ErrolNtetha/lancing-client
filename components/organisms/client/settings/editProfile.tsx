import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FiAlertTriangle } from 'react-icons/fi';
import { useProfileStore } from '../../../../hooks/useGlobalStore';
import { Button } from '../../../atoms/button';
import { FormLabel } from '../../../molecules/formLabel';

const EditProfileClient = () => {
    const { name, isClient } = useProfileStore().profile;
    const { register } = useForm({
        defaultValues: {
            firstName: name.firstName,
            lastName: name.lastName,
            title: 'Product Director'
        }
    });

    return (
        <section className='p-4'>
            {!isClient && (
                <section className='bg-gray p-3 mb-2'>
                    <h2 className='flex items-center gap-2 mb-3'> <FiAlertTriangle /> Attention: </h2>
                    <p> 
                        Fields that are not editable are handled by us. To edit those fields, you must supply us with 
                        your relevant documents to update them. 
                        <Link href='#' className='text-[blue] underline'> read more </Link>
                    </p>
                </section>
            )}
            <FormLabel
                type='text'
                labelName='First Names'
                placeholder='Njabulo Wiseman'
                name='firstName'
                required={true}
                register={register}
                disabled={true}
            />
            <FormLabel
                type='text'
                labelName='Last Names'
                placeholder='Ndlovu'
                name='lastName'
                required={true}
                register={register}
                disabled={true}
            />
            <FormLabel
                type='text'
                labelName='Title'
                placeholder='Copywriter'
                name='title'
                required={true}
                register={register}
            />

            <section className='flex items-center gap-2 mt-4'>
                <Button 
                    buttonText='Cancel'
                    handleClick={() => console.log('hello')}
                    className='border border-gray flex-1 px-3 py-2'
                />
                <Button 
                    buttonText='Save'
                    handleClick={() => console.log('hello')}
                    className='bg-slate text-white flex-1 px-3 py-2'
                />
            </section>
        </section>
    );
};

export default EditProfileClient;
