import React from 'react';

interface Props {
    htmlFor: string;
    labelName: string;
}

export const Label = ({ htmlFor, labelName }: Props) => <label htmlFor={htmlFor}> {labelName} </label>
