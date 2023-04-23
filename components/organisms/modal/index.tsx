import React from 'react'
import { Button } from '../../atoms/button';
import { FormLabel } from '../../molecules/formLabel';
import { Textarea } from '../../molecules/textArea';

interface Props {
    handleModal: React.MouseEventHandler<HTMLElement>;
    recipient?: {
        firstName: string;
        lastName: string;
    };
    previewText?: string
}

export const Modal = ({ handleModal, recipient, previewText }: Props) => {
    return (
        <section className='text-sm fixed top-0 left-0 bottom-0 w-full flex justify-center items-center bg-white-o backdrop-blur-md'>
            <section className='bg-white-p shadow-md border border-gray max-h-[80%] w-[90%] overflow-y-auto md:w-[30%] relative'> 
                <section className='pt-3 px-3'>
                    <h3 className='font-semibold text-lg sticky top-0 bg-white-p'> Send Proposal </h3>
                    <p className='my-2'> To: <span className='font-bold'> {recipient.firstName} {recipient.lastName} </span> </p>
                </section>
                <section className='pb-3 px-3'>
                    <FormLabel
                        labelName='Title'
                        name='title'
                        type='text'
                        placeholder='Write a title'
                        htmlFor='title'
                        value=''
                        onChange={(e) => console.log(e.target.value)}
                    />
                    <FormLabel
                        labelName='Subject'
                        name='subject'
                        type='text'
                        placeholder='Type a subject'
                        htmlFor='subject'
                        value=''
                        onChange={(e) => console.log(e.target.value)}
                    />
                    <Textarea
                        placeholder='Type proposal message'
                        value='Hello there, I am Graphic Designer specializing in Logo Design and branding as a whole.'
                        labelName='Description'
                        htmlFor='description'
                        name='description'
                        onChange={(e) => console.log(e.target.value)}
                    />
                </section>
                <section className='flex bg-white-p items-center gap-2 p-3 sticky bottom-0 left-0 w-full'>
                    <Button
                        buttonText='Close'
                        className='border border-gray py-2 px-4 w-[50%] hover:cursor-pointer'
                        handleClick={handleModal}
                    />
                    <Button
                        buttonText='Submit'
                        className='bg-slate text-white py-2 px-4 w-[50%] hover:cursor-pointer'
                        handleClick={() => console.log('proposal submited')}
                    />
                </section>
            </section>
        </section>
    )
}
