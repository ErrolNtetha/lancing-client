
import React from 'react';
import { Label } from '../../atoms/label';
import { TextareaInput } from '../../atoms/textarea';

interface IProps {
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
    value: string;
    placeholder: string;
    htmlFor: string;
    labelName: string;
    name: string;
}

export const Textarea = ({ onChange, value, name, placeholder, htmlFor, labelName  }: IProps) => {
    return (
        <section className='py-2'>
            <Label htmlFor={htmlFor} labelName={labelName}
            />
            <TextareaInput
                value={value}
                name={name}
                onChange={onChange}
                placeholder={placeholder}
            />
        </section>
    );
};
