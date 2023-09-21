import React from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { InputProps } from '../../../types';

export const Input = ({
    name,
    type,
    id,
    disabled = false,
    required = false,
    register,
    handleHideIcon,
    placeholder,
    inputHasValue,
    hasHideIcon = false,
    isHidden,
    value,
    onChange,
    shouldUnregister = false
}: InputProps) => {
    const inputContainer = `${disabled && 'hover:cursor-not-allowed'} flex items-center justify-between p-2 ${disabled && 'bg-[#eeeeee] text-gray'} border border-gray outline-black w-full block`;

    return (
        <section className={inputContainer}>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                autoComplete='off'
                className={`${disabled && 'hover:cursor-not-allowed'} bg-[inherit] outline-none w-full`}
                disabled={disabled}
                {...register(name, { required, value, onChange, shouldUnregister })}
            />
            {(hasHideIcon || inputHasValue) && (
                <span
                    onClick={handleHideIcon}
                    role='button'
                    className='pl-4 hover:cursor-pointer'
                >
                    {isHidden ? <FiEye /> : <FiEyeOff />}
                </span>
            )}
        </section>
    );
};
