import React from 'react';

const inputContainer = 'flex items-center justify-between p-2 bg-white-p border border-gray outline-black w-full block';

export interface InputProps {
    value: string;
    placeholder: string;
    name: string;
    type: string;
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>
}

export const TextareaInput = ({ value, name, onChange, placeholder }: InputProps) => {
    return (
        <section className={inputContainer}>
            <textarea
                name={name}
                cols={4}
                rows={10}
                wrap=''
                placeholder={placeholder}
                autoComplete='off'
                className='outline-none w-full'
                value={value}
                onChange={onChange}
            />
        </section>
    );
};
