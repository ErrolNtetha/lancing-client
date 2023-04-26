
import React from 'react';
import { Label } from '../../atoms/label';
import { TextareaInput, TextareaProps } from '../../atoms/textarea';

interface IProps extends TextareaProps {
    placeholder: string;
    labelName: string;
    name: string;
}

export const TextareaLabel = ({ register, required, name, placeholder, labelName  }: IProps) => {
    return (
        <section className='py-2'>
            <Label htmlFor={name} labelName={labelName}
            />
            <TextareaInput
                name={name}
                placeholder={placeholder}
                register={register}
                required={required}
            />
        </section>
    );
};
