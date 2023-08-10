
import React from 'react';
import { Label } from '../../atoms/label';
import { TextareaInput, TextareaProps } from '../../atoms/textarea';

interface IProps extends TextareaProps {
    placeholder: string;
    labelName: string;
    name: string;
    errorMessage?: string | undefined;
}

export const TextareaLabel = ({ register, required, name, placeholder, labelName, errorMessage }: IProps) => {
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
            {errorMessage && <p className='text-xs py-1 text-[red]'> {errorMessage} </p>}
        </section>
    );
};
