import React from 'react';
import { InputProps } from '../../../types';
import { Input } from '../../atoms/input';
import { Label } from '../../atoms/label';

export interface FormLabelProps extends InputProps {
    placeholder: string;
    labelName: string;
    type: string;
    handleHideIcon?: React.MouseEventHandler<HTMLSpanElement>;
    hasHideIcon?: boolean;
    isHidden?: boolean;
    errorMessage?: string | undefined;
    inputHasValue?: boolean;
}

export const FormLabel = ({ 
    name, 
    required, 
    register, 
    handleHideIcon, 
    isHidden, 
    type, 
    placeholder, 
    hasHideIcon, 
    labelName,
    errorMessage,
    disabled,
    inputHasValue,
    value,
    onChange,
    shouldUnregister
}: FormLabelProps) => {

    return (
        <section className='py-2'>
            <Label htmlFor={name} labelName={labelName}
            />
            <Input
                type={type}
                id={name}
                handleHideIcon={handleHideIcon}
                hasHideIcon={hasHideIcon}
                placeholder={placeholder}
                isHidden={isHidden}
                name={name}
                register={register}
                inputHasValue={inputHasValue}
                required={required}
                disabled={disabled}
                value={value}
                onChange={onChange}
                shouldUnregister={shouldUnregister}
            />
            {errorMessage && <p className='text-xs py-1 text-[red]'> {errorMessage} </p>}
        </section>
    );
};
