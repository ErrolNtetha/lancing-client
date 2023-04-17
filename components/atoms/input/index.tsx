import React from 'react';

const inputContainer = 'flex items-center justify-between p-2 bg-white-p border border-gray outline-black w-full block';

export interface InputProps {
    value: string;
    placeholder: string;
    name: string;
    type: string;
    hasHideIcon?: boolean;
    isHidden?: boolean;
    onChange: React.ChangeEventHandler<HTMLInputElement>
    handleHideIcon?: React.MouseEventHandler<HTMLSpanElement>;
}

export const Input = ({ value, name, type, onChange, handleHideIcon, placeholder, hasHideIcon = false, isHidden }: InputProps) => {
    return (
        <section className={inputContainer}>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                autoComplete='off'
                className='outline-none w-full'
                value={value}
                onChange={onChange}
            />
            { (hasHideIcon && value.length > 0) && 
            <span onClick={handleHideIcon} className='pl-4 hover:cursor-pointer'> 
                { isHidden ? 'Show' : 'Hide' }
            </span> 
            }
        </section>
    );
};
