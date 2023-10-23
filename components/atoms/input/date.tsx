import React from 'react';
import { DateProps } from '../../../types';

export const DateInput = ({
    name,
    id,
    required = false,
    register,
    disabled = false,
    onChange,
    value,
    shouldUnregister = false
}: DateProps) => {
    return (
        <input
            type='date'
            id={id}
            name={name}
            className={`${disabled && 'hover:cursor-not-allowed bg-gray'} border border-gray p-2 outline-none w-full`}
            disabled={disabled}
            required={required}
            {...register(name, { required, valueAsDate: true, onChange, value, shouldUnregister })}
        />
    );
};
