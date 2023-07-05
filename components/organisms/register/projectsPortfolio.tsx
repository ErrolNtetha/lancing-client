import Link from 'next/link';
import React from 'react';
import { FormLabel } from '../../molecules/formLabel';

export interface RProps {
    register: Function;
    component: React.ReactNode;
}


export const ProjectsPortfolio = ({ component, register }: RProps) => {
    return (
        <React.Fragment>
            <h4 className='divide-gray font-bold mb-4 text-center'> Portfolio Projects </h4>
            <FormLabel
                type='text'
                placeholder='Title'
                labelName='Project Title'
                name='title'
                register={register}
                required={true}
            />
            <FormLabel
                type='tel'
                placeholder='How many months/years did the projects take?'
                labelName='Project Duration'
                name='duration'
                register={register}
                required={true}
            />
            <FormLabel
                type='text'
                placeholder='What was the project about?'
                labelName='Description'
                name='description'
                register={register}
                required={true}
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
