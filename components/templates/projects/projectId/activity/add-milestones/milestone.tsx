'use client'

import React from 'react';
import {  useFieldArray, useForm } from 'react-hook-form';
import { Button } from '../../../../../../@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../../../../../@/components/ui/form';
import { Input } from '../../../../../../@/components/ui/input';
import { Separator } from '../../../../../../@/components/ui/separator';

export default function Milestone() {
    const { control, handleSubmit } = useForm();
    const { append, fields } = useFieldArray({
        control,
        name: 'milestones'
    });
    console.log('fields: ', fields); 

    const handleAddMilestone = (data: any) => {
        append(data);
    };

    return (
        <div>
            <h1 className='font-bold'> Add milestones </h1>
            <Separator />
            <form onSubmit={handleSubmit(handleAddMilestone)}>
                <Form {...useForm()}>
                    <section>
                        <FormField
                            control={control}
                            name='milestones'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor='milestones.title'> Title </FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder='Eg. Project Initiation' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button variant='outline' className='w-full'> Add Milestone </Button>
                </section>
            </Form>
        </form>
    </div>
);
};
