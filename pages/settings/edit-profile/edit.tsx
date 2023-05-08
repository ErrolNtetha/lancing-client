import Link from 'next/link';
import React from 'react';
import { FiAlertTriangle } from 'react-icons/fi';
import { Button } from '../../../components/atoms/button';
import { FormLabel } from '../../../components/molecules/formLabel';

type Props = {
    register: Function;
}

const Edit = ({ register }: Props) => {
    return (
        <section className='p-4'>
            <section className='bg-gray p-3 mb-2'>
                <h2 className='flex items-center gap-2'> <FiAlertTriangle /> Please note... </h2>
                <p> 
                    Fields that are not editable are handled by us. To edit those fields, you must supply us with 
                    your relevant documents to update them. 
                     <Link href='#' className='text-[blue] underline'> read more </Link>
                </p>
            </section>
            <FormLabel
                type='text'
                labelName='First Names'
                placeholder='Njabulo Wiseman'
                name='firstName'
                required={true}
                register={register}
            />
            <FormLabel
                type='text'
                labelName='Last Names'
                placeholder='Ndlovu'
                name='lastName'
                required={true}
                register={register}
            />

            <section className='flex justify-between gap-2'>
                <span />
                <span className='flex items-center gap-2'>
                    <Button 
                        buttonText='Cancel'
                        handleClick={() => console.log('hello')}
                        className='border border-gray px-3 py-2'
                    />
                    <Button 
                        buttonText='Save'
                        handleClick={() => console.log('hello')}
                        className='bg-slate text-white px-3 py-2'
                    />
                </span>
            </section>
        </section>
    );
};

export default Edit;
