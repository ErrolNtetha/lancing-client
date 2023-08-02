import { format } from 'date-fns';
import React from 'react';
import { FieldErrors, FieldValues } from 'react-hook-form';
import { FormLabel } from '../../components/molecules/formLabel';
import { TextareaLabel } from '../../components/molecules/textArea';

interface PortfolioProps {
    register: Function;
    component: React.ReactNode;
    errors: FieldErrors<FieldValues>;
}

export const Portfolio = ({ register, component, errors }: PortfolioProps) => {
    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        console.log(format(new Date(e.target.value), 'd MMM yyy'));
    };

    return (
        <section>
            <h3 className='font-semibold text-lg'> Portfolio </h3>
            <p className='text-sm mb-4'> Add past portolio projects to showcase your skills to clients. </p>
            <FormLabel
                type='text'
                name='portfolioTitle'
                labelName='Title'
                placeholder='Give this project a title'
                register={register}
                required={true}
                errorMessage={errors?.portfolioTitle?.message?.toString()}
            />
            <TextareaLabel
                name='portfolioDescription'
                labelName='Description'
                placeholder='Write a description explaining about this project.'
                register={register}
                required={true}
            />
            <FormLabel
                type='url'
                name='projectUrl'
                labelName='Website (optional)'
                placeholder='Website of this project...'
                register={register}
                required={false}
            />
            <section>
                <p> From: </p>
                <input type="date" className='mb-4 w-full border border-gray outline-none p-2' onChange={handleDateChange} />
            </section>
            <section>
                <p> To: </p>
                <input type="date" className='mb-4 w-full border border-gray outline-none p-2' onChange={handleDateChange} />
            </section>

            <section> {component} </section>
        </section>
    );
};
