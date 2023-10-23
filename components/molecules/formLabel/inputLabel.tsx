import React, { forwardRef } from 'react';

type InputProps = {
    label: string;
}

export const Input = forwardRef(function Input(props: InputProps, ref: React.LegacyRef<HTMLInputElement> | undefined) {
    const {
        label,
        ...inputProps
    } = props;

    return (
        <section>
            <label htmlFor='label' className='block'>{label}</label>
            <input {...inputProps} ref={ref} className='p-2 border border-gray my-2' />
        </section>
    );
});
