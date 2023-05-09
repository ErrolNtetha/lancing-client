import React from 'react';
import { Input, InputProps } from '../../atoms/input';
import { Label } from '../../atoms/label';

export interface FormLabelProps extends InputProps {
    placeholder: string;
    labelName: string;
    type: string;
    handleHideIcon?: React.MouseEventHandler<HTMLSpanElement>;
    hasHideIcon?: boolean;
    isHidden?: boolean;
    errorMessage?: string;
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
    errorMessage
}: FormLabelProps) => {
    return (
        <section className='py-2'>
            <Label htmlFor={labelName} labelName={labelName}
            />
            <Input
                type={type}
                handleHideIcon={handleHideIcon}
                hasHideIcon={hasHideIcon}
                placeholder={placeholder}
                isHidden={isHidden}
                name={name}
                register={register}
                required={required}
            />
            {errorMessage && <p className='text-xs py-1 text-[red]'> {errorMessage} </p>}
        </section>
    );
};
