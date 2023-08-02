'use client'

import React from 'react';
// import { FieldErrors, FieldValues } from 'react-hook-form';
// import { FormLabel } from '../../components/molecules/formLabel';
import { TextareaLabel } from '../../components/molecules/textArea';
import { AddPicture } from './addPicture';

interface PersonalProps {
    register: Function;
    component: React.ReactNode;
}

export const Personal = ({
    register,
    component,
}: PersonalProps) => {
    return (
        <React.Fragment>
            <h3 className='font-semibold text-lg'> Personal Information </h3>
            <p className='text-sm mb-4'>  </p>
            <AddPicture />
            <TextareaLabel 
                name='about'
                labelName='About Me'
                placeholder='Tell us about yourself...'
                register={register}
                required={true}
            />
            <section> {component} </section>
        </React.Fragment>
    );
};
