import { zodResolver } from '@hookform/resolvers/zod';
import { addDoc, collection, doc, serverTimestamp } from 'firebase/firestore';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { db } from '../../../../firebaseConfig';
import { useAuth } from '../../../../hooks/useAuth';
// import { formatNumber } from '../../../../utilities/format';
import { Button } from '../../../atoms/button';
import { DatePicker } from '../../../molecules/datePicker';
import { FormLabel } from '../../../molecules/formLabel';
import { TextareaLabel } from '../../../molecules/textArea';

type  GigProps = {
    handleModalToggle: React.MouseEventHandler<HTMLElement>
};

const PROJECT = {
    TITLE_MIN: 10,
    TITLE_MAX: 50,
    BUDGET_MIN: 299,
    BUDGET_MAX: 300,
    DESC_MIN: 50,
    DESC_MAX: 1800
}

const projectSchema = z.object({
    // Title validation schema
    title: z.string({ 
        required_error: 'Title is required.',
        invalid_type_error: 'Invalid input. Type of input should be a strings only.'
    })
    .min(PROJECT.TITLE_MIN, { message: `Title is too short. Should at least be ${PROJECT.TITLE_MIN} characters long.` })
    .max(PROJECT.TITLE_MAX, { message: `Title is too long. Should not be longer than ${PROJECT.TITLE_MAX} characters.` }),

    // Budget validation schema
    budget: z.number({ 
        required_error: 'Budget amount is required.', 
        invalid_type_error: 'Invalid budget amount. Make sure you entered an amount.' 
    })
    .gt(PROJECT.BUDGET_MIN, { message: `Your budget should be R${PROJECT.BUDGET_MIN + 1} and above.` }),

    // Description validation schema
    description: z.string({ 
        required_error: 'Description is required.',
        invalid_type_error: 'Description is invalid.'
    })
    .min(PROJECT.DESC_MIN, { message: `Description is too short. Should at least be ${PROJECT.DESC_MIN} characters long.` })
    .max(PROJECT.DESC_MAX, { message: `Description is long. Should not be longer than ${PROJECT.DESC_MAX} characters.` }),

    // Date validation schema
    deadline: z.date({
        required_error: 'Date is required.',
        invalid_type_error: 'Date is invalid. Make sure you selected correct date.',
    })
});

export const PostGig = ({ handleModalToggle }: GigProps) => {
    const userAuth = useAuth();

    const { register, handleSubmit, setValue, formState: { errors } } = useForm({ 
        resolver: zodResolver(projectSchema) 
    });

    const handlePostProject = async (data: any) => {
        if (!data) {
            return;
        }

        try {
            const projectRef = collection(db, 'projects');
            await addDoc(projectRef, {
                ...data,
                postedBy: doc(db, `users/${userAuth.uid}`),
                createdAt: serverTimestamp(),
                contract: 'Ongoing',
                skillLevel: 'Expert',
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className='p-2 overflow-hidden'>
            <section className='p-2'>
                <p className='text-center text-lg font-semibold'> New Project </p>
            </section>

            <form onSubmit={handleSubmit(handlePostProject)} className='relative py-4'>
                <section className='max-h mb-8 overflow-y-auto'>
                    <FormLabel
                        type='text'
                        labelName='Title'
                        placeholder='Project title'
                        required={true}
                        register={register}
                        name='title'
                        errorMessage={errors?.title?.message?.toString()}
                    />
                    <section className='py-2'>
                        <label htmlFor='budget'> Budget (optional) </label>
                        <input
                            type='number'
                            placeholder='Enter a budget amount for this project.'
                            className='items-center justify-between p-2  border border-gray outline-none w-full'
                            name='budget'
                            id='budget'
                            onChange={(e) => {
                                e.preventDefault();
                                setValue('budget', Number(e.target.value));
                            }}
                        />
                        {errors?.budget?.message && <p className='text-xs py-1 text-[red]'> {errors?.budget?.message?.toString()} </p>}
                    </section>
                    <TextareaLabel
                        labelName='Description'
                        placeholder='Write requirements for this project.'
                        name='description'
                        required={true}
                        register={register}
                        errorMessage={errors?.description?.message?.toString()}
                    />
                    <DatePicker
                        name='deadline'
                        labelName='Deadline (optional)'
                        required={false}
                        errorMessage={errors?.deadline?.message?.toString()}
                        onChange={(e) => {
                            e.preventDefault();
                            setValue('deadline', new Date(e.target.value));
                        }}
                    />
                </section>
                <section className='flex items-center w-full bg-white gap-2 absolute bottom-0 left-0'>
                    <Button
                        buttonText='Cancel'
                        type='button'
                        handleClick={handleModalToggle}
                        className='flex-1 border border-gray p-2'
                    />
                    <Button
                        buttonText='Post'
                        handleClick={handlePostProject}
                        className='flex-1 bg-slate p-2 text-white'
                    />
                </section>
            </form>
        </section>
    );
};
