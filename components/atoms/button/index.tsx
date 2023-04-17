import React from 'react';

interface ButtonProps {
    handleClick: React.MouseEventHandler<HTMLButtonElement>;
    className: string;
}

export const Button = ({ handleClick, className }: ButtonProps) => (
    <button type='submit' className={className} onClick={handleClick}> Subscribe Now </button>
);
