import React from 'react';
import { generateRanomId } from '../../../utilities/generateRandomId';

type SelectProps = {
    options: string[];
    title: string;
    name: string;
    register: Function;
};

export const Select = ({ options, title, name, register }: SelectProps) => {
    return (
        <select name={name} {...register(name)} className='p-2 bg-white-p border border-gray w-full my-2'>
            <option> {title} </option>
            {options.map((option) => <option key={generateRanomId()} value={option.toLowerCase().trim()}> {option} </option>)}
        </select>
    );
};
