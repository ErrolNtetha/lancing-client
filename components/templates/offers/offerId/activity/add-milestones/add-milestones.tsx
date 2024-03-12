'use client'

import { zodResolver } from '@hookform/resolvers/zod';
import format from 'date-fns/format';
import { CalendarIcon } from 'lucide-react';
import React from 'react';
import {  useFieldArray, useForm } from 'react-hook-form';
import { FiPlus } from 'react-icons/fi';
import { z } from 'zod';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../../../../../@/components/ui/accordion';
import { Button } from '../../../../../../@/components/ui/button';
import { Calendar } from '../../../../../../@/components/ui/calendar';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../../../../../../@/components/ui/form';
import { Input } from '../../../../../../@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '../../../../../../@/components/ui/popover';
import { Separator } from '../../../../../../@/components/ui/separator';
import { Textarea } from '../../../../../../@/components/ui/textarea';
import { cn } from '../../../../../../@/lib/utils';

const milestonesSchema = z.object({
    title: z.string({ required_error: 'Title is required.' }).max(50, 'Title is too long.'),
    payment: z.coerce.number(),
    description: z.string({ required_error: 'Description is required.' }).min(10, 'Description is too short.'),
    deadline: z.date({ required_error: 'Date is required.' })
});

export default function AddMilestone() {
    const { control, handleSubmit } = useForm({
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
                <section>
                    <h1 className='font-bold text-2xl max-w-xl'> Almost there. Now create milestones for this project. </h1>
                    <p className='max-w-md'> 
                        Milestones are essential for breaking down a larger project into manageable phases, tracking progress and ensuring a smooth collaboration.
                    </p>
                </section>
                <Separator />

                <section className='mt-4 flex-[0.5]'>
                    <Form {...useForm()}>
                        <>
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

                            <FormField
                                control={control}
                                name='payment'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel htmlFor='payment'> Payment (%) </FormLabel>
                                        <FormControl>
                                            <Input {...field} type='number' placeholder='Payment for this milestone (%)' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={control}
                                name='deadline'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel htmlFor='deadline'> Deadline </FormLabel>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-full pl-3 text-left font-normal",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {field.value ? (
                                                                format(field.value, "PPP")
                                                            ) : (
                                                                <span> Due date </span>
                                                            )}
                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={field.value}
                                                        onSelect={field.onChange}
                                                        disabled={(date) =>
                                                            date < new Date() || date < new Date("1900-01-01")
                                                        }
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                            <FormMessage />
                                    </FormItem>
                                    )}
                                />
                        </>
                        <Button className='w-full mt-3 flex items-center gap-2'> <FiPlus /> Add </Button>
                    </Form>
                </section>
                </section>
            </form>

            <section className='flex-1 mt-6 md:mt-0'>
                <section className='font-bold'> Milestones ({fields.length}) </section>
                <section className='h-max border border-md rounded-md bg-gray-50 px-2 py-0'>
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
                                            <section className='pb-2'>
                                                <span className='font-bold'> Description: </span> {item?.description}
                                            </section>
                                            <section className='flex justify-between items-center'>
                                                <span> Due: 30 May 2024 </span>
                                                <span> Payment: {item?.payment}% </span>
                                            </section>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </section>
                        ))
                    }
                </section>
            </section>
        </section>
    );
}
