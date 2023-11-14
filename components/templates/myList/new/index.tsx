'use client'

import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { FiImage, FiPlusCircle } from 'react-icons/fi';
import { z } from 'zod';
import { AspectRatio } from '../../../../@/components/ui/aspect-ratio';
import { Button } from '../../../../@/components/ui/button';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '../../../../@/components/ui/dialog';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../../../../@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../../@/components/ui/select';
import { Switch } from '../../../../@/components/ui/switch';
import { Textarea } from '../../../../@/components/ui/textarea';

const listSchema = z.object({
    list: z.object({
        category: z.string({ required_error: 'This is required.' }),
        description: z.string({ required_error: 'This field is required.' }).min(30, 'Description is too short').max(130, 'Description is too long.'),
        isActive: z.boolean({ required_error: 'This is required.'}).optional(),
        avatar: z.string({ required_error: 'This is required.' }),
        packages: z.array(z.object({ value: z.string(), tier: z.string(), price: z.number(), description: z.string() })).length(3).nonempty({ message: 'At least add one package.' }),
    })
});

export default function NewList() {
    const imageRef = useRef<HTMLInputElement | null>(null);

    const form = useForm({
        mode: 'onChange',
        resolver: zodResolver(listSchema),
        defaultValues: {
            list: {
                isActive: true,
                category: '',
                description: '',
                avatar: '',
                packages: [
                    {
                        value: 'basic',
                        tier: 'Basic',
                        price: 0,
                        description: '',
                    },
                    {
                        value: 'standard',
                        tier: 'Standard',
                        price: 0,
                        description: '',
                    },
                    {
                        value: 'premium',
                        tier: 'Premium',
                        price: 0,
                        description: '',
                    },
                ],
            }
        }
    });

    const { control } = form;
    const { fields, append } = useFieldArray({
        control,
        name: 'list.packages'
    });
    console.log('Fields: ', fields);

    const handleAvatarChange = (e: any) => {
        const imageUrl = e.target.files[0];

        if (imageUrl) {
            const reader = new FileReader();

            reader.readAsDataURL(imageUrl);
            reader.onload = () => {
                if (reader.result) {
                    // @ts-ignore
                    form.setValue('list.avatar', reader.result);
                }
            };
        }
    }

    const { list: { avatar } } = form.watch();
    const handleAddNewList = (data: any) => console.log('Data: ', data);

    return (
        <section className='m-3'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleAddNewList)} className='flex flex-col gap-4'>
                    <section>
                        <input
                            type='file'
                            onChange={handleAvatarChange}
                            ref={imageRef}
                            hidden
                        />
                        {!avatar 
                            ? (
                                <>
                                    <Button className='my-3 w-full' type='button' onClick={() => imageRef.current?.click()} variant='outline'> 
                                        Upload Cover Photo <FiImage className='ml-2' /> 
                                    </Button>
                                </>
                            )
                            : (
                                <section className='flex flex-col gap-2 justify-center my-4'> 
                                    <section className='w-full border border-gray-100'>
                                        <AspectRatio ratio={16/9}>
                                            <Image src={avatar} fill={true} alt='An image' className='rounded-md object-cover' />
                                        </AspectRatio>
                                    </section>
                                    <Button className='w-full' type='button' onClick={() => imageRef.current?.click()} variant='outline'> Change Cover Photo </Button>
                                </section>
                        )}
                        <p className='block text-gray-500'> Recommended size is 1280x720 </p>
                        <FormMessage />
                    </section>

                    <FormField
                        control={form.control}
                        name='list.category'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel htmlFor='list.category'> Category </FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder='Select category' />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value='Programming and software development'> Programming and software development </SelectItem>
                                        <SelectItem value='Graphic design and multimedia'> Graphic design and multimedia </SelectItem>
                                        <SelectItem value='Writing and translation'> Writing and translation </SelectItem>
                                        <SelectItem value='Digital marketing and advertising'>Digital marketing and advertising</SelectItem>
                                        <SelectItem value='Business and administrative support'>Business and administrative support</SelectItem>
                                        <SelectItem value='Creative and entertainment'>Creative and entertainment</SelectItem>
                                        <SelectItem value='Engineering and architecture'>Engineering and architecture</SelectItem>
                                        <SelectItem value='Sales and custormer service'>Sales and custormer service</SelectItem>
                                        <SelectItem value='Consulting and coaching'>Consulting and coaching</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormDescription>
                                    Choose a category this list should appear from.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
        />

            <FormField
                control={form.control}
                name='list.description'
                render={({ field }) => (
                    <FormItem>
                        <FormLabel htmlFor='list.description'> Description </FormLabel>
                        <FormControl>
                            <Textarea {...field} placeholder='Ex. &apos;I will create a fully custom logo for your company.&apos;' />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <section>
                <label htmlFor="package"> Packages </label>
                {fields.map((field, index) => (
                <Dialog key={field.id}>
                    <DialogTrigger asChild> 
                        <Button variant='outline' className='mb-3 font-semibold w-full bg-background text-foreground flex items-center justify-between gap-2'>
                            Add {field.tier} Package <FiPlusCircle className='text-lg' />
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle> {field.tier} Package </DialogTitle>
                        </DialogHeader>
                        <section>
                                <FormField
                                    key={field.id}
                                    control={form.control}
                                    name={`list.packages.${index}.description`}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel htmlFor='list.description'> Description </FormLabel>
                                            <FormControl>
                                                <Textarea {...field} placeholder='Ex. &apos;I will create a fully custom logo for your company.&apos;' />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                        </section>
                    </DialogContent>
                </Dialog>
                ))}
                <FormMessage />
            </section>

            <section className='p-2 w-full border border-gray-200 rounded-md'>
                <FormField 
                    control={form.control}
                    name='list.isActive'
                    defaultValue={false}
                    render={({ field }) => (
                        <FormItem className='flex justify-between gap-3'>
                            <section>
                                <FormLabel className='text-base'> Activate </FormLabel>
                                <FormDescription>
                                    List is activated on creation by default. You can deactivate this at anytime.
                                </FormDescription>
                            </section>
                            <FormControl>
                                <Switch
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
            </section>

            <section className='fixed bottom-0 left-0 p-2 bg-background w-full flex gap-2'>
                <Button variant='outline' className='flex-1' asChild>
                    <Link href='/mylistings'> Back </Link>
                </Button>
                <Button type='submit' className='bg-primary flex-1'> Create </Button>
            </section>
    </form>
</Form>
</section>
    );
};
