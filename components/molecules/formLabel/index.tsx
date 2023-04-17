import React from 'react';
import { Input, InputProps } from '../../atoms/input';
import { Label } from '../../atoms/label';

interface IProps extends InputProps {
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    value: string;
    placeholder: string;
    htmlFor: string;
    labelName: string;
    name: string;
    type: string;
    handleHideIcon?: React.MouseEventHandler<HTMLSpanElement>;
    hasHideIcon?: boolean;
}

export const FormLabel = ({ onChange, handleHideIcon, type, value, name, placeholder, htmlFor, hasHideIcon, labelName  }: IProps) => {
    return (
        <section className='py-2'>
            <Label htmlFor={htmlFor} labelName={labelName}
            />
            <Input
                type={type}
                value={value}
                handleHideIcon={handleHideIcon}
                name={name}
                hasHideIcon={hasHideIcon}
                onChange={onChange}
                placeholder={placeholder}
            />
        </section>
    );
};
