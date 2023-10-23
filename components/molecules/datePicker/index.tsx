import React from 'react';
import { DateProps } from '../../../types';
import { DateInput } from '../../atoms/input/date';

interface DProps extends DateProps {
    labelName: string | React.ReactHTMLElement<HTMLElement>;
    errorMessage?: string | React.ReactHTMLElement<HTMLElement>;
}

export const DatePicker = ({ name, value, disabled, register, required, labelName, errorMessage }: DProps) => {
    return (
        <section className='py-2'>
            <label htmlFor={name}>{labelName}</label>
            <DateInput
                name={name}
                required={required}
                register={register}
                disabled={disabled}
                id={name}
                value={value}
            />
            {errorMessage && <p className='text-xs py-1 text-[red]'> {errorMessage} </p>}
        </section>
    );
};
