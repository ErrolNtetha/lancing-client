'use client'

import React from 'react';
import { FieldErrors, FieldValues } from 'react-hook-form';
// import { FieldErrors, FieldValues } from 'react-hook-form';
// import { FormLabel } from '../../components/molecules/formLabel';
import { TextareaLabel } from '../../components/molecules/textArea';
// import { AddPicture } from './addPicture';

interface PersonalProps {
    register: Function;
    component: React.ReactNode;
    errors: any;
}

export const Personal = ({
    register,
    component,
    errors
}: PersonalProps) => {
    return (
        <React.Fragment>
            <h3 className='font-semibold text-md text-gray'> Personal Information </h3>
            <h3 className='font-semibold text-2xl'>
                To start off, tell us a bit about yourself.
            </h3>
            <p className='text-md mb-4'> 
                It is important that you check your grammar, punctuations and spellings.
            </p>
            <TextareaLabel
                name='personal.bio'
                labelName='Bio'
                placeholder='What are you good at? What are your skills?'
                register={register}
                required={true}
                errorMessage={errors.personal?.bio?.message?.toString()}
            />
            <section> {component} </section>
        </React.Fragment>
    );
};
