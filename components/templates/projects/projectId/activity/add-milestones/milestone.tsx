'use client'

import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import {  useFieldArray, useForm } from 'react-hook-form';
import { FiPlus } from 'react-icons/fi';
import { z } from 'zod';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../../../../../@/components/ui/accordion';
import { Button } from '../../../../../../@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../../../../../../@/components/ui/form';
import { Input } from '../../../../../../@/components/ui/input';
import { Separator } from '../../../../../../@/components/ui/separator';
import { Textarea } from '../../../../../../@/components/ui/textarea';

const milestonesSchema = z.object({
    title: z.string({ required_error: 'Title is required.' }).max(50, 'Title is too long.'),
    description: z.string({ required_error: 'Description is required.' }).min(10, 'Description is too short.'),
});

export default function Milestone() {
    const { control, reset, handleSubmit } = useForm({
        resolver: zodResolver(milestonesSchema),
        mode: 'onChange',
    });
    const { append, fields } = useFieldArray({
        control,
        name: 'milestones'
    });

    const handleAddMilestone = (data: any) => {
        append(data);
    };

    return (
    <section className='md:flex gap-6'>
        <form onSubmit={handleSubmit(handleAddMilestone)}>
            <section>
                <h1 className='font-bold text-2xl max-w-xl'> Almost there. Now create milestones for this project. </h1>
                <p className='max-w-md'> 
                    Milestones are essential for breaking down a larger project into manageable phases, tracking progress and ensuring a smooth collaboration.
                </p>
            </section>
            <Separator />

            <section className='mt-4 flex-[0.5]'>
                <Form {...useForm()}>
                    <section>
                        <FormField
                            control={control}
                            name='title'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor='title'> Title </FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder='Title' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                    <FormField
                        control={control}
                        name='description'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel htmlFor='description'> Description </FormLabel>
                                <FormControl>
                                    <Textarea {...field} placeholder='Write a description' />
                                </FormControl>
                                <FormDescription>
                                    Provide an explaination of what this milestone is about and what will be completed.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </section>
                <Button className='w-full mt-3 flex items-center gap-2'> <FiPlus /> Add </Button>
            </Form>
            </section>
            </form>

            <section className='flex-1 mt-6 md:mt-0 h-max border border-md rounded-md bg-gray-100 px-2 py-0'>
                {!fields.length 
                    ? <section className='font-bold flex items-center justify-center h-20'> No milestones added yet. </section>
                    : fields.map((item: any, index) => (
                        <section key={item.id} className=''>
                            <Accordion type='single' collapsible>
                                <AccordionItem value={`item-${index}`}>
                                    <AccordionTrigger> 
                                        Milestone {index + 1}: {item?.title}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <section>
                                            <span className='font-bold'> Description: </span> {item?.description}
                                        </section>
                                        <Separator />
                                        <section className='flex justify-between items-center py-2'>
                                            <span> Deadline: 30 May 2024 </span>
                                            <span> Payment: 30% </span>
                                        </section>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </section>
                    ))
                }
            </section>
            </section>
    );
};
