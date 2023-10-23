import React from 'react'

export const AmountLabel = (props: any) => {
    const { register, label, ...inputProps } = props;
    return (
        <section className='py-2'>
            <label htmlFor={props.id}> {label} </label>
            <section className='flex items-center border border-gray outline-[red] w-full'>
                <span className='bg-gray p-2 h-full'> R </span>
                <input {...inputProps} {...register(props.name, { valueAsNumber: true })} className='h-full p-2 w-full' />
                <span className='self-end p-2 h-full'> /hr </span>
            </section>
        </section>
    )
}
