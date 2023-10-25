'use client'

import { zodResolver } from '@hookform/resolvers/zod';
import { AvatarImage } from '@radix-ui/react-avatar';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Avatar, AvatarFallback } from '../../../@/components/ui/avatar';
import { Button } from '../../../@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../../@/components/ui/form';
import { Input } from '../../../@/components/ui/input';
import { Textarea } from '../../../@/components/ui/textarea';
import { usePersonalStore } from '../../../hooks/useGlobalStore';

const personalSchema = z.object({
    avatar: z 
        .string({ required_error: 'Avatar is required.' })
        .min(1, 'Avatar is required.'),
    title: z
        .string({ required_error: 'Title is required.' })
        .min(2, 'Title is too short. It must be at least 2 characters long.'),
    bio: z
        .string({ required_error: 'Bio is required.' })
        .min(30, 'Bio is too short. It must be at least 30 characters long.'),
});

export default function Personal() {
    const imageRef = useRef<HTMLInputElement | null>(null);
    const router = useRouter();
    const { addPersonalData, personal } = usePersonalStore();
    const form = useForm({
        resolver: zodResolver(personalSchema),
        mode: 'onChange',
        defaultValues: {
            avatar: personal.avatar,
            title: personal.title,
            bio: personal.bio,
        }
    });
    const { avatar } = form.watch();

    const handlePersonalSubmit = (data: z.infer<typeof personalSchema>) => {
        addPersonalData(data);
        router.push('/apply/education');
    };

    const handleAvatarChange = (e: any) => {
        const imageUrl = e.target.files[0];

        if (imageUrl) {
            const reader = new FileReader();

            reader.readAsDataURL(imageUrl);
            reader.onload = () => {
                if (reader.result) {
                    // @ts-ignore
                    form.setValue('avatar', reader.result);
                }
            };
        }
    }

    const avatarComp = (<section className='flex flex-col gap-3'>
        <section className='relative border border-gray rounded-full w-[100px] h-[100px]'>
            <Avatar className='w-full h-full'>
                <AvatarImage src={personal.avatar || avatar} alt='dsfad' />
                <AvatarFallback>
                    <Image
                        src='/assets/images/svg/profileIcon.svg'
                        alt='random image'
                        width={200}
                        height={200}
                    />
                </AvatarFallback>
            </Avatar>
            </section>
            <Button
                type='button'
                onClick={() => imageRef.current?.click()}
                className='bg-foreground p-2'
            > 
            Set avatar 
        </Button>
    </section>);

    return (
        <section className='md:container'>
        <Form {...form}>
            <section>
                <h3 className='font-semibold text-2xl'>
                    To start off, tell us a bit about yourself.
                </h3>
                <p className='text-md mb-4'> 
                    It is important that you check your grammar, punctuations and spellings.
                </p>
            </section>
            <section>
                <input
                    type='file'
                    onChange={handleAvatarChange}
                    ref={imageRef}
                    hidden
                />
                <section className='border border-gray rounded-md p-3 flex justify-center my-4'> 
                    {avatarComp} 
                </section>
            </section>
            <form onSubmit={form.handleSubmit(handlePersonalSubmit)}>
                <FormField
                    control={form.control}
                    name='title'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel htmlFor='title'> Title </FormLabel>
                            <FormControl>
                                <Input {...field} placeholder='Eg. Software Engineer' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <section className='mt-4'>
                    <FormField
                        control={form.control}
                        name='bio'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel htmlFor='bio'> Bio </FormLabel>
                                <FormControl>
                                    <Textarea {...field} placeholder='Write your bio explaining yourself and your skills' />
                                </FormControl>
                                <p className='text-sm text-muted-foreground'>
                                    This is what is going to appear on your profile when clients view your profile.
                                </p>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </section>
                <section className='bg-background fixed left-0 bottom-0 gap-3 p-2 w-full flex'>
                    <Button type='button' onClick={() => router.push('/apply/getting-started')} className='bg-white flex-1' variant='outline'> Back </Button>
                    <Button type='submit' className='flex-1 bg-primary' disabled={!form.formState.isValid}> Next Step </Button>
                </section>

            </form>
        </Form>
        </section>
    );
};
