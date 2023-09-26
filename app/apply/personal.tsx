'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import { FormLabel } from '../../components/molecules/formLabel';
import { TextareaLabel } from '../../components/molecules/textArea';

interface PersonalProps {
    register: Function;
    component: React.ReactNode;
    errors: any;
    setValue: Function;
    watch: Function;
}

export const Personal = ({
    register,
    component,
    errors,
    setValue,
    watch
}: PersonalProps) => {
    const { personal } = watch();
    const imageRef = useRef<HTMLInputElement | null>(null);

    const handleAvatarChange = (e: any) => {
        const imageUrl = e.target.files[0];

        if (imageUrl) {
            const reader = new FileReader();

            reader.readAsDataURL(imageUrl);
            reader.onload = () => {
                if (reader.result) {
                    setValue('personal.avatar', reader.result);
                }
            };
        }
    }

    const avatar = (<section className='flex flex-col gap-3'>
        <section className='relative border border-gray rounded-full w-[100px] h-[100px]'>
            {!personal.avatar ? (
                <Image
                    src='/assets/images/svg/profileIcon.svg'
                    alt='random image'
                    width={200}
                    height={200}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                />
                )
                : (
                    <Image
                        src={personal.avatar}
                        alt='random image'
                        width={200}
                        height={200}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                    />
                )}
            </section>
            <button
                type='button'
                onClick={() => imageRef.current?.click()}
                className='bg-slate p-2 text-white'
            > 
            Set avatar 
        </button>
    </section>);

    return (
        <React.Fragment>
            <h3 className='font-semibold text-md text-gray'> Personal Information </h3>
            <h3 className='font-semibold text-2xl'>
                To start off, tell us a bit about yourself.
            </h3>
            <p className='text-md mb-4'> 
                It is important that you check your grammar, punctuations and spellings.
            </p>
            <input
                type='file'
                onChange={handleAvatarChange}
                ref={imageRef}
                hidden
            />
            <section className='border border-gray rounded-md p-3 flex justify-center my-4'> 
                {avatar} 
            </section>
            <section className='border border-gray rounded-md p-3'>
                <FormLabel
                    type='text'
                    placeholder='Ex. Logo Designer'
                    name='personal.title'
                    labelName='Title'
                    required={false}
                    register={register}
                />
                <TextareaLabel
                    name='personal.bio'
                    labelName='Bio'
                    placeholder='What are you good at? What are your skills?'
                    register={register}
                    required={true}
                    errorMessage={errors.personal?.bio?.message?.toString()}
                />
            </section>
            <section> {component} </section>
        </React.Fragment>
    );
};
