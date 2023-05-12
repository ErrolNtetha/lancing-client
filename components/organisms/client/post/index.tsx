import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../../atoms/button';
import { FormLabel } from '../../../molecules/formLabel';
import { TextareaLabel } from '../../../molecules/textArea';

type  GigProps = {
    handleModalToggle: React.MouseEventHandler<HTMLElement>
};

export const PostGig = ({ handleModalToggle }: GigProps) => {
    const { register, handleSubmit } = useForm();
    const handleGig = (data: any) => console.log('Data: ', data);

    return (
        <section className='p-2'>
            <section className='p-2'>
                <p className='text-center text-lg font-semibold'> Create New Gig </p>
            </section>

            <form onSubmit={handleSubmit(handleGig)} className='py-4'>
                <FormLabel
                    type='text'
                    labelName='Title'
                    placeholder='Job title'
                    required={true}
                    register={register}
                    name='title'
                />
                <FormLabel
                    type='number'
                    labelName='Budget'
                    placeholder='Enter a budget amount for this gig.'
                    required={false}
                    register={register}
                    name='budget'
                />
                <TextareaLabel
                    labelName='Description'
                    placeholder='Write requirements for the job.'
                    name='description'
                    required={true}
                    register={register}
                />
            </form>

            <section className='flex items-center gap-2'>
                <Button
                    buttonText='Cancel'
                    type='button'
                    handleClick={handleModalToggle}
                    className='flex-1 border border-gray p-2'
                />
                <Button
                    buttonText='Post'
                    handleClick={handleGig}
                    className='flex-1 bg-slate p-2 text-white'
                />
            </section>
        </section>
    );
};
