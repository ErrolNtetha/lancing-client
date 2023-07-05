import Link from 'next/link';
import React from 'react';
import { FormLabel } from '../../molecules/formLabel';

export interface RProps {
    component: React.ReactNode;
    initialState: any;
    register: Function;
}


export const WorkExperience = ({ component, register }: RProps) => {
    return (
        <React.Fragment>
            <h4 className='divide-gray font-bold mb-4 text-center'> Work Experience </h4>
            <FormLabel
                type='text'
                placeholder='Name of the company'
                labelName='Company Name'
                name='companyName'
                required={false}
                register={register}
            />
            <FormLabel
                type='tel'
                placeholder='How many years'
                labelName='Years of Experience'
                name='numOfYears'
                required={false}
                register={register}
            />
            <FormLabel
                type='text'
                placeholder='Job title'
                labelName='Job Title'
                name='jobTitle'
                required={false}
                register={register}
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
