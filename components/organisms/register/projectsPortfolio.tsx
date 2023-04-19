import Link from 'next/link';
import React from 'react';
import { FormLabel } from '../../molecules/formLabel';

    export interface RProps {
        component: React.ReactNode;
        initialState: any;
        onChange: React.ChangeEventHandler
    }


export const ProjectsPortfolio = ({ component, initialState, onChange }: RProps) => {
    return (
        <React.Fragment>
            <h4 className='divide-gray font-bold mb-4 text-center'> Portfolio Projects </h4>
            <FormLabel
                type='text'
                value={initialState.title}
                placeholder='Title'
                labelName='Project Title'
                name='title'
                htmlFor='title'
                onChange={onChange}
            />
            <FormLabel
                type='tel'
                value={initialState.duration}
                placeholder='How many months/years did the projects take?'
                labelName='Project Duration'
                name='duration'
                htmlFor='duration'
                onChange={onChange}
            />
            <FormLabel
                type='text'
                value={initialState.description}
                placeholder='What was the project about?'
                labelName='Description'
                name='description'
                htmlFor='description'
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
