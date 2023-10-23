import React from 'react';

const inputContainer = 'flex items-center justify-between p-2 bg-white-p border border-gray outline-black w-full block';

export interface TextareaProps {
    placeholder: string;
    name: string;
    required: boolean;
    register: Function;
}

export const TextareaInput = ({ required, name, register, placeholder }: TextareaProps) => {
    return (
        <section className={inputContainer}>
            <textarea
                name={name}
                cols={4}
                rows={4}
                wrap=''
                placeholder={placeholder}
                autoComplete='off'
                className='outline-none w-full'
                {...register(name, { required })}
            />
        </section>
    );
};
