import React from 'react';

interface ButtonProps {
    handleClick: React.MouseEventHandler<HTMLButtonElement>;
    className: string;
    buttonText: string | React.ReactNode;
}

export const Button = ({ handleClick, className, buttonText }: ButtonProps) => (
    <button type='submit' className={className} onClick={handleClick}> {buttonText} </button>
);
