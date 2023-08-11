import React from 'react'

type CounterProps = {
    count: number;
}

export const DigitCounter = ({ count }: CounterProps) => {
    const isMany = count > 9 ? '9+' : count;
    return (
        <span className='flex justify-center items-center bg-slate rounded-full w-6 h-6 text-white text-sm'>
            {isMany}
        </span>
    )
}
