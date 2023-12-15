'use client'

import { zodResolver } from '@hookform/resolvers/zod';
import { addDoc, collection, doc, serverTimestamp } from 'firebase/firestore';
import { useParams, useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '../../../../../@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../../../../../@/components/ui/form';
import { Input } from '../../../../../@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../../../@/components/ui/select';
import { Separator } from '../../../../../@/components/ui/separator';
import { Textarea } from '../../../../../@/components/ui/textarea';
import { useToast } from '../../../../../@/components/ui/use-toast';
import { db } from '../../../../../firebaseConfig';
import { useAuth } from '../../../../../hooks/useAuth';

const ProposalScheme = z.object({
    title: z.string({ required_error: 'This field is required.' }).min(30, 'Title is too short.'),
    coverLetter: z.string({ required_error: 'This field is required.' }).min(30, 'Cover letter is too short.').max(1200, 'Your letter is more than 1200 characters.').optional(),
    estimatedPeriod: z.string({ required_error: 'This field is required.' }),
    additionalNotes: z.string().max(250, 'Too many characters.').optional(),
    methodology: z.string().max(1200, 'Too many characters.').optional(),
    paymentTerms: z.string({ required_error: 'This is required.' }),
});

export default function Proposal() {
    const [loading, setLoading] = React.useState(false);
    const params = useParams();
    const router = useRouter();
    const { toast } = useToast();
    const { currentUser } = useAuth();
    const form = useForm<z.infer<typeof ProposalScheme>>({
        mode: 'onSubmit',
        resolver: zodResolver(ProposalScheme),
        defaultValues: {
            additionalNotes: '',
        }
    });

    const handleSubmitProposal = async (data: z.infer<typeof ProposalScheme>) => {
        setLoading(true);
        console.log(data);

        try {
            const proposalsRef = collection(db, 'proposals');

            await addDoc(proposalsRef, {
                freelancer: doc(db, `users/${currentUser.uid}`),
                project: doc(db, `users/${params?.projectId}`),
                createdAt: serverTimestamp(),
                ...data
            });

            toast({
                className: 'bg-[green]',
                title: 'Success',
                description: 'Proposal successfully sent.'
            });

            router.push('/feed');

        } catch (error) {
            console.log(error);
            toast({
                variant: 'destructive',
                title: 'Failed',
                description: 'Failed to send proposal.'
            });
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className='md:container mb-10 flex gap-6 relative'>
            <section className='md:p-3 h-max flex-[70%] rounded-md md:border border-gray-200'>
                 <section className='mb-4 gap-3'>
                    <h1 className='font-bold text-xl mb-2'> Send Proposal </h1>
                    {/*   <section className='flex items-center gap-3'>
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
                    </section> */}
                    <p className='mt-2 text-sm md:text-md'> It is essential to provide clear and comprehensive information to ensure a smooth collaboration. </p>
                </section>
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
                                name='coverLetter'
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel> Cover Letter </FormLabel>
                                        <Textarea {...field} placeholder='Briefly introduce yourself and your expertise.' />
                                        <FormDescription>
                                             Provide a brief description on why you are a good fit for this project. Max: 1200 characters.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </section>

                        <section className='border border-gray-600 rounded-md p-3 mb-3'>
                            <section className='mb-2'>
                                <h1 className='font-bold text-md'> Approach and Methodology </h1>
                                <Separator />
                            </section>
                            <FormField
                                name='methodology'
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel> Methodology </FormLabel>
                                        <Textarea {...field} placeholder='Explain steps you would take to achieve this project&apos;s goals.' />
                                        <FormDescription>
                                            Describe to the client what you are proposing, responsibilities, deliverables, etc..
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </section>

                        <section className='border border-gray-600 rounded-md p-3 mb-3'>
                            <section className='mb-2'>
                                <h1 className='font-bold text-md'> Timeline and Availability </h1>
                                <Separator />
                            </section>

                            <FormField
                                control={form.control}
                                name='estimatedPeriod'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel htmlFor='estimatedPeriod'> Estimated Completion Period </FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder='Choose estimated period' />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value='1wk'> Less than 7 days </SelectItem>
                                                <SelectItem value='2wks'> Less than 2 weeks </SelectItem>
                                                <SelectItem value='1mnth'> Less than 1 month </SelectItem>
                                                <SelectItem value='3mnths'> Less than 3 months </SelectItem>
                                                <SelectItem value='6mnths'> More than 6 months </SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            
                            <FormField
                                name='additionalNotes'
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel> Notes </FormLabel>
                                        <Textarea {...field} placeholder='Comment on estimated period above.' />
                                        <FormDescription>
                                             Additional information regarding estimated period.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                        </section>

                        <section className='border border-gray-600 rounded-md p-3 mb-3'>
                            <section className='mb-2'>
                                <h1 className='font-bold text-md'> Cost and Payment Terms </h1>
                                <Separator />
                            </section>

                        {/* <FormField
                                control={form.control}
                                name='rate'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel htmlFor='rate'> Preferred Rate </FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder='Preferred payment rate' />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value='hourly-rate'> Hourly Rate </SelectItem>
                                                <SelectItem value='fixed-rate'> Fixed Rate </SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormDescription>
                                            Indicate how would you like the client to pay you.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            /> */}

                        {/* <FormField
                                name='bidAmount'
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel> Amount </FormLabel>
                                        <Input type='number' {...field} placeholder='How much do you charge for this project?' />
                                        <FormDescription>
                                            Note: This is an hourly rate.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            /> */}

                        <FormField
                            control={form.control}
                            name='paymentTerms'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor='paymentSchedule'> Payment Terms </FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder='Preferred payment term' />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value='upfront'> Upfront </SelectItem>
                                            <SelectItem value='perMilestone'> Per Milestone </SelectItem>
                                            <SelectItem value='onCompletion'> On Completion </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormDescription>
                                        Indicate the payment term would you like the client to pay you.
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
                            disabled={!form.formState.isValid || loading }
                        >
                            {loading ? 'Submitting...' : 'Submit Proposal'}
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
