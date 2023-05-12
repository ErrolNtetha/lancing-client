import React from 'react';

interface ButtonProps {
    type?: 'submit' | 'button'
    handleClick?: React.MouseEventHandler<HTMLButtonElement>;
    className: string;
    buttonText: string | React.ReactNode;
}

export const Button = ({ handleClick, className, type = 'submit', buttonText }: ButtonProps) => (
    <button type={type} className={className} onClick={handleClick}> {buttonText} </button>
);
