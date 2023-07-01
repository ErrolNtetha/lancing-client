import Link from 'next/link';
import React from 'react';
import { FormLabel } from '../../molecules/formLabel';

    export interface RProps {
        component: React.ReactNode;
        initialState: any;
        onChange: React.ChangeEventHandler
    }


export const WorkExperience = ({ component, initialState, onChange }: RProps) => {
    return (
        <React.Fragment>
            <h4 className='divide-gray font-bold mb-4 text-center'> Work Experience </h4>
            <FormLabel
                type='text'
                value={initialState.companyName}
                placeholder='Name of the company'
                labelName='Company Name'
                name='companyName'
                htmlFor='companyName'
                onChange={onChange}
            />
            <FormLabel
                type='tel'
                value={initialState.numOfYears}
                placeholder='How many years'
                labelName='Years of Experience'
                name='numOfYears'
                htmlFor='numOfYears'
                onChange={onChange}
            />
            <FormLabel
                type='text'
                value={initialState.jobTitle}
                placeholder='Job title'
                labelName='Job Title'
                name='jobTitle'
                htmlFor='jobTitle'
                onChange={onChange}
            />
            <section className='mt-4'>
                {component}
            </section>
            <span className='block pt-4 text-[.8rem] text-center'> 
                <p> By creating an account, you agree to our <span className='underline'> <Link href='#'> Terms and Conditions</Link></span>.</p>
            </span>
        </React.Fragment>
    );
};
