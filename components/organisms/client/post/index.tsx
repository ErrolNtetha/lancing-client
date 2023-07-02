import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../../atoms/button';
import { FormLabel } from '../../../molecules/formLabel';
import { TextareaLabel } from '../../../molecules/textArea';
import { db } from '../../../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

type  GigProps = {
    handleModalToggle: React.MouseEventHandler<HTMLElement>
};

export const PostGig = ({ handleModalToggle }: GigProps) => {
    const { register, handleSubmit } = useForm();
    const jobs = collection(db, 'jobs');

    const handleGig = async (data: any) => {
        const { description, title, budget } = data;
        if (!(description || title || budget)) return;
        try {
            const docRef = await addDoc(jobs, { 
                ...data,
                completed: false, 
                posted: new Date(),
            });
            console.log('Document writen: ', docRef);
        } catch (error) {
            console.error('an error: ', error);
        }
    };

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

                <section className='flex items-center pt-4 gap-2'>
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
            </form>
        </section>
    );
};
