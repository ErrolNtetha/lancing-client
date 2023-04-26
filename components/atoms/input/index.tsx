import React from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const inputContainer = 'flex items-center justify-between p-2 bg-white-p border border-gray outline-black w-full block';

export interface InputProps {
    placeholder: string;
    name: string;
    type?: string;
    hasHideIcon?: boolean;
    isHidden?: boolean;
    handleHideIcon?: React.MouseEventHandler<HTMLSpanElement>;
    required: boolean;
    register: Function;
}

export const Input = ({ name, type, required, register, handleHideIcon, placeholder, hasHideIcon = false, isHidden }: InputProps) => {
    return (
        <section className={inputContainer}>
            <input
                type={type}
                placeholder={placeholder}
                autoComplete='off'
                className='outline-none w-full'
                {...register(name, { required })}
            />
            {hasHideIcon && (
                <span onClick={handleHideIcon} className='pl-4 hover:cursor-pointer'> 
                    { isHidden ? <FiEye /> : <FiEyeOff /> }
                </span> 
            )}
        </section>
    );
};
