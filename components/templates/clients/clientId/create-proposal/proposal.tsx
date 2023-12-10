'use client'

import { zodResolver } from '@hookform/resolvers/zod';
import format from 'date-fns/format';
import { CalendarIcon } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '../../../../../@/components/ui/button';
import { Calendar } from '../../../../../@/components/ui/calendar';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../../../../../@/components/ui/form';
import { Input } from '../../../../../@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '../../../../../@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../../../@/components/ui/select';
import { Separator } from '../../../../../@/components/ui/separator';
import { Textarea } from '../../../../../@/components/ui/textarea';
import { cn } from '../../../../../@/lib/utils';
// import { Avatar } from '../../../../molecules/image';
// import { StarRating } from '../../../../molecules/star-rating';

const ProposalScheme = z.object({
    title: z.string({ required_error: 'This field is required.' }).min(10, 'Title is too short.'),
    description: z.string({ required_error: 'This field is required.' }).min(10, 'Description is too short.'),
    startDate: z.date({ required_error: 'Start date is required.' }),
    deadline: z.date({ required_error: 'Deadline date is required.' }),
    totalBudget: z.coerce.number({ required_error: 'Total budget date is required.' }).min(200, 'Budget should be at least R200.'),
    paymentStructure: z.string({ required_error: 'This is required.' }),
    paymentSchedule: z.string({ required_error: 'This is required.' }),
});

export default function Proposal() {
    const params = useParams();
    const router = useRouter();
    const form = useForm<z.infer<typeof ProposalScheme>>({
        mode: 'onChange',
        resolver: zodResolver(ProposalScheme),
    });
    console.log('client id: ', params?.clientId);

    const handleSubmitProposal = (data: z.infer<typeof ProposalScheme>) => console.log(data);

    return (
        <section className='md:container mb-10 flex gap-6 relative'>
            <section className='md:p-3 h-max flex-[70%] rounded-md md:border border-gray-200'>
                {/* <section className='mb-4 gap-3'>
                    <h1 className='font-bold text-xl mb-2'> Create an offer </h1>
                    <section className='flex items-center gap-3'>
                        <Avatar
                            src={foundVendors[0].avatar}
                            alt={`${foundVendors[0].names?.firstName}&apos;s avatar`}
                            size='w-12 h-12'
                        />
                        <section>
                            <p className='flex items-center gap-2'> To: {foundVendors[0].names?.firstName} {foundVendors[0].names?.lastName} </p>
                            <p className=''> {foundVendors[0].service} </p>
                            <p><StarRating value={4} /></p>
                        </section>
                    </section>
                    <p className='mt-2 text-sm md:text-md'> It is essential to provide clear and comprehensive information to ensure a smooth collaboration. </p>
                </section> */}
                <Separator />
                <form onSubmit={form.handleSubmit(handleSubmitProposal)} className='mt-3 w-full md:max-w-[70%]'>
                    <Form {...form}>
                        <section className='border border-gray-600 rounded-md p-3 mb-3'>
                            <section className='mb-2'>
                                <h1 className='font-bold text-md'> Project Details </h1>
                                <Separator />
                            </section>

                            <FormField
                                name='title'
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel> Title </FormLabel>
                                        <Input {...field} placeholder='Title' />
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
                                        <FormDescription>
                                            Provide a detailed description of this project, including scope, objectives, and any specific requirements.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </section>

                        <section className='border border-gray-600 rounded-md p-3 mb-3'>
                            <section className='mb-2'>
                                <h1 className='font-bold text-md'> Timeline and Deadlines </h1>
                                <Separator />
                            </section>
                            <FormField
                                control={form.control}
                                name='startDate'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel htmlFor='experience.endDate'> Start Date </FormLabel>
                                        <FormControl>
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
                                                                <span> Project Start Date </span>
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
                                                            date <= new Date() || date < new Date("1900-01-01")
                                                        }
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
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
                                        <FormLabel htmlFor='experience.endDate'> End Date </FormLabel>
                                        <FormControl>
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
                                                                <span> Project End Date or Deadline </span>
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
                                                            date <= new Date() || date < new Date("1900-01-01")
                                                        }
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </section>

                        {/* <section className='border border-gray-200 rounded-md p-3 mb-3'>
                            <section className='mb-2'>
                                <h1 className='font-bold text-md'> Scope of Work </h1>
                            </section>
                        </section> */}

                        <section className='border border-gray-600 rounded-md p-3 mb-3'>
                            <section className='mb-2'>
                                <h1 className='font-bold text-md'> Budget and Compensation </h1>
                                <Separator />
                            </section>

                            <FormField
                                name='totalBudget'
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel> Total Budget </FormLabel>
                                        <Input type='number' {...field} placeholder='Specify total budget' />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                        <FormField
                            control={form.control}
                            name='paymentStructure'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor='paymentStructure'> Payment Structure </FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder='Select payment structure' />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value='hourly'> Hourly </SelectItem>
                                            <SelectItem value='fixedPrice'> Fixed Price </SelectItem>
                                            <SelectItem value='perMilestone'> Per Milestone </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormDescription>
                                        Specify how payments will be structured.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name='paymentSchedule'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor='paymentSchedule'> Payment Schedule </FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder='Select payment schedule' />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value='upfront'> Upfront </SelectItem>
                                            <SelectItem value='perMilestone'> Per Milestone </SelectItem>
                                            <SelectItem value='onCompletion'> On Completion </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormDescription>
                                        Specify when payments will be made.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        </section>

                        {/* <section className='border border-gray-200 rounded-md p-3 mb-3'>
                            <section className='mb-2'>
                                <h1 className='font-bold text-md'> Communication Channels </h1>
                            </section>
                        </section>

                        <section className='border border-gray-200 rounded-md p-3 mb-3'>
                            <section className='mb-2'>
                                <h1 className='font-bold text-md'> Legal and Contractual Details </h1>
                            </section>
                        </section>

                        <section className='border border-gray-200 rounded-md p-3 mb-3'>
                            <section className='mb-2'>
                                <h1 className='font-bold text-md'> Collaboration Tools </h1>
                            </section>
                        </section> */}

                    <section className='fixed w-full p-2 bg-background bottom-0 left-0 flex items-center md:mt-3 gap-3 md:justify-end'>
                        <Button
                            variant='outline'
                            type='button'
                            onClick={() => router.back()}
                            className='flex-1 font-bold'
                        >
                            Cancel
                        </Button>
                        <Button 
                            className='font-bold flex-1'
                            disabled={!form.formState.isValid}
                        >
                            Submit Proposal
                        </Button>
                    </section>
                    </Form>
                </form>
            </section>
            <aside className='hidden p-3 flex-[20%] rounded-md md:block border border-gray-200 h-max'>
                <h1 className='font-bold text-md mb-1'>Bio</h1>
                <p className='text-sm' />
            </aside>
        </section>
    );
};
