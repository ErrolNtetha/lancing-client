import React from 'react';

interface ButtonProps {
    type?: 'submit' | 'button'
    handleClick?: React.MouseEventHandler<HTMLButtonElement>;
    className: string;
    buttonText: string | React.ReactNode;
    disabled?: boolean;
}

export const Button = ({ handleClick, className, type = 'submit', disabled = false, buttonText }: ButtonProps) => (
    <button type={type} disabled={disabled} className={className} onClick={handleClick}> {buttonText} </button>
);
