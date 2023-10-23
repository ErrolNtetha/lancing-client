'use client'

import Image from 'next/image';
import React, { useRef } from 'react';

export const AddPicture = () => {
    const [image, setImage] = React.useState<string>('');
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleChangePicture = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            let imageUrl = e.target.files[0];
            let reader = new FileReader();

            reader.readAsDataURL(imageUrl);
            reader.onload = () => {
                if (reader.result) {
                    setImage(reader.result.toString());
                }
            };
            return;
        }
        console.log('no selected file');
    };

    return (
        <section className='flex justify-center border border-gray'>
            <section className='flex flex-col justify-center gap-2 p-3'>
                <input 
                    type='file' 
                    accept='image/png'
                    onChange={handleChangePicture}
                    ref={inputRef}
                    hidden
                />
                <section className='relative border border-gray rounded-full w-[100px] h-[100px]'>
                    {!image ? (
                        <Image
                            src='/assets/images/defaultAvatar.png'
                            alt='random image'
                            width={200}
                            height={200}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                        />
                        )
                        : (
                            <Image
                                src={image}
                                alt='random image'
                                width={200}
                                height={200}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                            />
                        )}
                    </section>
                <button 
                    type='button' 
                    onClick={() => {
                        if (inputRef.current) {
                            inputRef.current.click();
                        }
                    }}
                    className='p-2 bg-slate text-white'
                > 
                    Change Avatar 
                </button>
            </section>
        </section>
    );
};
