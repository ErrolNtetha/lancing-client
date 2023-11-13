'use client'

import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '../../../@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../../../@/components/ui/dialog';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../../../@/components/ui/form';
import { Input } from '../../../@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../@/components/ui/select';
import { Switch } from '../../../@/components/ui/switch';
import { Textarea } from '../../../@/components/ui/textarea';
import List from './list';

const listSchema = z.object({
    list: z.object({
        description: z.string({ required_error: 'This field is required.' }).min(10, 'Description is too short').max(50, 'Description is too long.'),
    })
});

export default function MyList() {
    const form = useForm({
        mode: 'onSubmit',
        resolver: zodResolver(listSchema),
    });

    const handleAddNewList = (data: any) => console.log('Data: ', data);

    return (
        <section className='m-3 md:container'>
            <List />

            {/* Button to add list */}
            <section className='fixed bottom-0 bg-background left-0 w-full p-2'>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className='bg-primary font-bold w-full'>
                            Create New List
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle> Add New List </DialogTitle>
                            <DialogDescription> By default, newly created list will be active. </DialogDescription>
                        </DialogHeader>
                        <section className='py-4'>
                            <Form {...form}>
                            <form onSubmit={form.handleSubmit(handleAddNewList)} className='flex flex-col gap-3'>

                                <FormField
                                    control={form.control}
                                    name='list.category'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel htmlFor='list.category'> Category </FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder='Select category to add this list from' />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value='Programming and software development'> Programming and software development </SelectItem>
                                                    <SelectItem value='Graphic design and multimedia'> Graphic design and multimedia </SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormDescription>
                                                Choose a category you want to add list to.
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
                                            <FormLabel htmlFor='experience.description'> Description </FormLabel>
                                            <FormControl>
                                                <Textarea {...field} placeholder='I will create a fully custom logo for your company.' />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField 
                                    control={form.control}
                                    name='list.isActive'
                                    defaultValue={false}
                                    render={({ field }) => (
                                        <FormItem className='flex items-center justify-between'>
                                            <section>
                                                <FormLabel className='text-base'> Activate </FormLabel>
                                            </section>
                                            <FormControl>
                                                <Switch
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                />
                                            </FormControl>
                                            <FormDescription>
                                                List is activated on creation by default. You can deactivate it at anytime.
                                            </FormDescription>
                                        </FormItem>
                                    )}
                                />


                                <DialogFooter className='mt-4 w-full flex gap-2'>
                                    <Button type='submit' className='bg-primary flex-1'> Save </Button>
                                </DialogFooter>
                            </form>
                            </Form>
                        </section>
                    </DialogContent>
                </Dialog>
            </section>
        </section>
    );
};
