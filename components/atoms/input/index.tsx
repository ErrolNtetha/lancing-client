import React from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { InputProps } from '../../../types';

export const Input = ({ 
    name, 
    type, 
    disabled = false, 
    required, 
    register, 
    handleHideIcon, 
    placeholder, 
    hasHideIcon = false, 
    isHidden 
}: InputProps) => {
    const inputContainer = `flex items-center justify-between p-2 ${disabled && 'bg-[#eeeeee] text-gray'} border border-gray outline-black w-full block`;

    return (
        <section className={inputContainer}>
            <input
                type={type}
                placeholder={placeholder}
                autoComplete='off'
                className='outline-none w-full'
                disabled={disabled}
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
