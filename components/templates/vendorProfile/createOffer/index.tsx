'use client'

import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '../../../../@/components/ui/button';
import { Form, FormField, FormItem, FormLabel, FormMessage } from '../../../../@/components/ui/form';
import { Input } from '../../../../@/components/ui/input';
import { Separator } from '../../../../@/components/ui/separator';
import { Textarea } from '../../../../@/components/ui/textarea';
import { Avatar } from '../../../molecules/image';
import { StarRating } from '../../../molecules/star-rating';
import { vendors } from '../../../organisms/vendor/vendors';

const OfferScheme = z.object({
    subject: z.string({ required_error: 'This field is required.' }).min(10, 'Subject is too short.'),
    description: z.string({ required_error: 'This field is required.' }).min(10, 'Description is too short.'),
});

export default function Offer() {
    const params = useParams();
    const foundVendors = vendors.filter((v) => v.id === Number(params?.vendorId));
    const form = useForm<z.infer<typeof OfferScheme>>({
        resolver: zodResolver(OfferScheme),
    });

    const handleSubmitOffer = (data: z.infer<typeof OfferScheme>) => console.log(data);

    return (
        <section className='md:container flex gap-6 relative'>
            <section className='p-4 h-max flex-[70%] rounded-md border border-gray-200'>
                <section className='flex items-center mb-4 gap-3'>
                    <h1 className='font-bold text-xl'> Create an offer </h1>
                    <section className='flex items-center gap-3'>
                        <Avatar
                            src='/assets/images/errol.png'
                            alt={`${foundVendors[0].names?.firstName}&apos;s avatar`}
                            size='w-12 h-12'
                        />
                        <section>
                            <p className='flex items-center gap-2'> To: {foundVendors[0].names?.firstName} {foundVendors[0].names?.lastName} <StarRating value={4} /> </p>
                            <p className=''> {foundVendors[0].service} </p>
                        </section>
                    </section>
                </section>
                <Separator />
                <form onSubmit={form.handleSubmit(handleSubmitOffer)} className='mt-3 w-full md:max-w-[70%]'>
                    <Form {...form}>
                        <FormField
                            name='subject'
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel> Description </FormLabel>
                                    <Input {...field} placeholder='Write subject' />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            name='description'
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel> Description </FormLabel>
                                    <Textarea {...field} placeholder='Write a description' />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                    <section className='fixed w-full p-2 bg-background bottom-0 left-0 flex items-center md:mt-3 gap-3 md:justify-end'>
                        <Button variant='outline' className='flex-1 font-bold'>
                            Cancel
                        </Button>
                        <Button className='font-bold flex-1'>
                            Send Offer
                        </Button>
                    </section>
                    </Form>
                </form>
            </section>
            <aside className='hidden p-3 flex-[20%] rounded-md md:block border border-gray-200 h-max'>
                <h1 className='font-bold text-md mb-1'>Bio</h1>
                <p className='text-sm'>{foundVendors[0].description}</p>
            </aside>
        </section>
    );
};
