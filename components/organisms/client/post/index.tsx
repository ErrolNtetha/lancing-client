import { zodResolver } from '@hookform/resolvers/zod';
import { DialogContent } from '@radix-ui/react-dialog';
import { format } from 'date-fns';
import { addDoc, collection, doc, serverTimestamp } from 'firebase/firestore';
import { CalendarIcon } from 'lucide-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '../../../../@/components/ui/button';
import { Calendar } from '../../../../@/components/ui/calendar';
import { Dialog, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../../../../@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../../../@/components/ui/form';
import { Input } from '../../../../@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '../../../../@/components/ui/popover';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../../@/components/ui/select';
// import { Switch } from '../../../../@/components/ui/switch';
import { Textarea } from '../../../../@/components/ui/textarea';
import { cn } from '../../../../@/lib/utils';
import { db } from '../../../../firebaseConfig';
import { useAuth } from '../../../../hooks/useAuth';
// import { formatNumber } from '../../../../utilities/format';

type  GigProps = {
    DialogTrigger: any;
};

const PROJECT = {
    TITLE_MIN: 10,
    TITLE_MAX: 50,
    BUDGET_MIN: 299,
    BUDGET_MAX: 300,
    DESC_MIN: 50,
    DESC_MAX: 1800
}

const projectSchema = z.object({
    // Title validation schema
    title: z.string({ 
        required_error: 'Title is required.',
        invalid_type_error: 'Invalid input. Type of input should be a strings only.'
    })
    .min(PROJECT.TITLE_MIN, { message: `Title is too short. Should at least be ${PROJECT.TITLE_MIN} characters long.` })
    .max(PROJECT.TITLE_MAX, { message: `Title is too long. Should not be longer than ${PROJECT.TITLE_MAX} characters.` }),

    // Budget validation schema
    budget: z.number({ 
        required_error: 'Budget amount is required.', 
        invalid_type_error: 'Invalid budget amount. Make sure you entered an amount.' 
    })
    .gt(PROJECT.BUDGET_MIN, { message: `Your budget should be R${PROJECT.BUDGET_MIN + 1} and above.` }),

    // Description validation schema
    description: z.string({ 
        required_error: 'Description is required.',
        invalid_type_error: 'Description is invalid.'
    })
    .min(PROJECT.DESC_MIN, { message: `Description is too short. Should at least be ${PROJECT.DESC_MIN} characters long.` })
    .max(PROJECT.DESC_MAX, { message: `Description is long. Should not be longer than ${PROJECT.DESC_MAX} characters.` }),

    // Date validation schema
    deadline: z.date({
        required_error: 'Date is required.',
        invalid_type_error: 'Date is invalid. Make sure you selected correct date.',
    })
});

export const PostGig = () => {
    const { currentUser } = useAuth();

    const form = useForm({ 
        resolver: zodResolver(projectSchema) 
    });

    const handlePostProject = async (data: any) => {
        if (!data) {
            return;
        }

        try {
            const projectRef = collection(db, 'projects');
            await addDoc(projectRef, {
                ...data,
                postedBy: doc(db, `users/${currentUser.uid}`),
                createdAt: serverTimestamp(),
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Dialog>
            <DialogTrigger className='md:hidden fixed bottom-0 left-0 w-full hover:cursor-pointer'> 
                <Button className='bg-primary text-white p-2 m-2 font-semibold text-center'> 
                    Create New Project
                </Button>
            </DialogTrigger>
            <DialogContent className='text-sm'>
                <DialogHeader>
                    <DialogTitle> New Project </DialogTitle>
                </DialogHeader>
                <section className='py-4'>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handlePostProject)} className='flex flex-col gap-3'>
                            <FormField
                                control={form.control}
                                name='title'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel htmlFor='title'> Title </FormLabel>
                                        <FormControl>
                                            <Input {...field} placeholder='Eg. Urgently looking for Logo Designer' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                        <FormField
                            control={form.control}
                            name='budget'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor='budget'> Budget </FormLabel>
                                    <FormControl>
                                        <Input type='number' {...field} placeholder='Enter budget you have for this project' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='description'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor='description'> Description </FormLabel>
                                    <FormControl>
                                        <Textarea {...field} placeholder='What are you looking for? What are the requirements for this project?' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
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
                                                        <span> Choose a deadline </span>
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
                                                    date > new Date() || date < new Date("1900-01-01")
                                                }
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                    {/* <FormField 
                                    control={form.control}
                                    name='duration'
                                    defaultValue={false}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel> Duration </FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder='Select project duration' />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value='ongoing'> Ongoing </SelectItem>
                                                    <SelectItem value='once-off'> Once-off </SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormItem>
                                    )}
                                />

                            <FormField 
                                    control={form.control}
                                    name='skillLevel'
                                    defaultValue={false}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel> Skill Level </FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder='Select skill level' />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value='beginner'> Beginner </SelectItem>
                                                    <SelectItem value='intermediate'> Intermediate </SelectItem>
                                                    <SelectItem value='expert'> Expert </SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormItem>
                                    )}
                                /> */}

                            <DialogFooter className='mt-4 w-full flex gap-2'>
                                <DialogTrigger className='bg-white flex-1' asChild>
                                    <Button className='flex-1' variant='outline'> Cancel </Button>
                                </DialogTrigger>
                                <Button type='submit' className='bg-primary flex-1'> Save </Button>
                            </DialogFooter>
                        </form>
                    </Form>
                </section>
            </DialogContent>
        </Dialog>
    );
};
