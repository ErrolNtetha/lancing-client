/* eslint-disable  react-hooks/exhaustive-deps */
'use client'

import { format } from 'date-fns';
import { addDoc, collection, doc, DocumentReference, getDoc, getDocs, query, serverTimestamp, where } from 'firebase/firestore';
import { CalendarIcon } from 'lucide-react';
import React, { useEffect, useRef } from 'react';
import { Calendar } from '../../../@/components/ui/calendar';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../../../@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../../@/components/ui/form';
import { Button } from '../../../@/components/ui/button';
import { Input } from '../../../@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '../../../@/components/ui/popover';
import { Textarea } from '../../../@/components/ui/textarea';
import { cn } from '../../../@/lib/utils';
import { db } from '../../../firebaseConfig';
import { z } from 'zod';
import withAuth from '../../../hoc/withAuth';
import { useAuth } from '../../../hooks/useAuth';
import { useProfileStore } from '../../../hooks/useGlobalStore';
import { Sidebar } from '../../molecules/sidebar';
import { Client } from '../../organisms/client/';
import { Vendor } from '../../organisms/vendor';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../@/components/ui/select';
import { useToast } from '../../../@/components/ui/use-toast';
import { MoonLoader } from 'react-spinners';
import Vendors from './vendors';

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
    budget: z.coerce.number({ 
        required_error: 'Budget amount is required.', 
        invalid_type_error: 'Invalid budget amount. Make sure you enter numbers.' 
    })
    .gt(PROJECT.BUDGET_MIN, { message: `Your budget should be R${PROJECT.BUDGET_MIN + 1} and above.` }).optional(),

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
    }).optional(),
    contract: z.string({ required_error: 'Contract is required.' }),
    skillLevel: z.string({ required_error: 'Skill level is required.' })
});

const ClientUI = () => {
    const isClient = useProfileStore((state: any) => state.profile?.isClient);
    // const [success, setSuccess] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const { toast } = useToast();
    const { currentUser } = useAuth();
    const renderUI = isClient ? <Vendors /> : <Client />;
    const dialogTriggerRef = useRef(null);
    const closeDialogRef = useRef(null);
    const form = useForm({ 
        resolver: zodResolver(projectSchema) 
    });

    const handlePostProject = async (data: any) => {
        if (!data) {
            return;
        }

        setLoading(true);

        try {
            const projectRef = collection(db, 'projects');
            await addDoc(projectRef, {
                ...data,
                postedBy: doc(db, `users/${currentUser.uid}`),
                createdAt: serverTimestamp(),
            })
            toast({
                className: 'bg-[green] text-white',
                title: 'Success',
                description: 'Project was successfully posted.'
            });
            // @ts-ignore
            closeDialogRef?.current.click();
        } catch (error) {
            console.log(error);
            toast({
                variant: 'destructive',
                title: 'Ops. Something went wrong.',
                description: 'There was a problem trying to create project.'
            });
        } finally {
            setLoading(false);
        }
    }

    React.useEffect(() => {
        if (form.formState.isSubmitSuccessful) {
            form.reset({
                title: '',
                description: '',
                budget: '',
            });
        }
    }, [form.formState, form.reset]);

    useEffect(() => {
        async function getAuthor(authorRef: DocumentReference<unknown>) {
            if (authorRef) {
                try {
                    const author = await getDoc(authorRef);
                    if (author.exists()) {
                        return author.data();
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }


        async function getProject(projectRef: DocumentReference<unknown>) {
            if (projectRef) {
                try {
                    const author = await getDoc(projectRef);
                    if (author.exists()) {
                        return author.data();
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }

        async function getProposals() {
            const proposalsRef = collection(db, 'proposals');
            try {
                const querySnapshot = await getDocs(proposalsRef);
                const documents = querySnapshot.docs;
                for (let doc of documents) {
                    const { sentBy, project } = doc.data();
                
                    if (sentBy && project) {
                        const author = await getAuthor(sentBy);
                        const projectDoc = await getProject(project);
                    }
                }

            } catch (error) {
                console.log(error);
            }
        };

        async function getMessages() {
            const messagesRef = collection(db, 'messages');
            try {
                const querySnapshot = query(messagesRef, where('user', '==', `user/${currentUser.uid}`));
                console.log('Message document: ', querySnapshot);

            } catch (error) {
                console.log(error);
            }
        };

        getMessages();
        getProposals();
    }, []);

    return (
        <>
            <section className='md:container'>
                {renderUI} 

                {isClient && (
                    <Dialog>
                        <DialogTrigger ref={dialogTriggerRef} className='bg-background text-white p-2 font-semibold text-center md:hidden fixed bottom-0 left-0 w-full hover:cursor-pointer'> 
                            <Button className='w-full'>
                                Create New Project
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
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
                                        name='description'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel htmlFor='description'> Description </FormLabel>
                                                <FormControl>
                                                    <Textarea {...field} placeholder='What are the requirements for this project?' />
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
                                            <FormLabel htmlFor='budget'> Estimated Budget </FormLabel>
                                            <FormControl>
                                                <Input type='number' {...field} onChange={(e) => field.onChange(e.target.value)} placeholder='Enter budget you have for this project' />
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

                        <FormField 
                            control={form.control}
                            name='contract'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel> Contract </FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder='Select contract type' />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value='Ongoing'> Ongoing </SelectItem>
                                            <SelectItem value='Once-off'> Once-off </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormItem>
                        )}
                    />

                <FormField 
                    control={form.control}
                    name='skillLevel'
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
                                    <SelectItem value='Beginner'> Beginner </SelectItem>
                                    <SelectItem value='Intermediate'> Intermediate </SelectItem>
                                    <SelectItem value='Expert'> Expert </SelectItem>
                                </SelectContent>
                            </Select>
                        </FormItem>
                )}
            />

        <DialogFooter className='mt-4 w-full flex gap-2'>
            <DialogTrigger ref={closeDialogRef} className='bg-white flex-1' asChild>
                <Button className='flex-1' variant='outline'> Cancel </Button>
            </DialogTrigger>
            <Button 
                type='submit' 
                className='bg-primary flex-1'
                disabled={loading}
            > 
            {loading ? <MoonLoader size={20} color='white' /> : 'Create'}
        </Button>
    </DialogFooter>
</form>
                                        </Form>
                                    </section>
                                </DialogContent>
                            </Dialog>

                    )}
          </section>
        </>
    );
};

export default withAuth(ClientUI);
