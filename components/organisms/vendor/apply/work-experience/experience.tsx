// @ts-nocheck
'use client'

// import { format } from 'date-fns';
import { format, isPast } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { FiPlus } from 'react-icons/fi';
import { Button } from '../../../../../@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../../../../../@/components/ui/dialog';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../../../../../@/components/ui/form';
import { Input } from '../../../../../@/components/ui/input';
import { Calendar } from '../../../../../@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../../../@/components/ui/popover";
import { Switch } from '../../../../../@/components/ui/switch';
import { cn } from '../../../../../@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useExperienceStore } from '../../../../../hooks/useGlobalStore';
import { useRouter } from 'next/navigation';
import { Textarea } from '../../../../../@/components/ui/textarea';
import { ApplyCard, ApplyContent, ApplyDescription, ApplyFooter, ApplySubTitle, ApplyTitle } from '../applyCard';

const experienceSchema = z.object({
    experience: z.object({
        position: z.string({ required_error: 'This field is required.' }).min(2, 'Position must be at least 2 characters long.'),
        company: z.string().min(2, 'Company name must be at least 2 characters long.'),
        responsibilities: z.string().min(5, 'Responsibilities must be at least 5 characters long.').optional(),
        startDate: z.date(),
        endDate: z.date().optional(),
        isStillWorking: z.boolean().optional(),
    }),
}).required()

const WorkExperience = () => {
    const { experience, addExperience } = useExperienceStore();
    const [checked, setChecked] = React.useState(false);
    const form = useForm({
        mode: 'onSubmit',
        resolver: zodResolver(experienceSchema),
        defaultValues: {
            work: experience,
        }
    });
    const { control } = form;
    const router = useRouter();

    const { fields, append } = useFieldArray({
        control,
        name: 'workExperience',
    });

    const handleExperience = (data: any) => {
        const { experience } = data;

        append(experience);
        addExperience(experience);
    };

    const handleNextStep = () => {
        /* Save data to database before moving to the next step */
        router.push('/apply/preview');
    };

    const formatTheDistance = (item: any) => {
        if (item.from && item.to) {
            return formatDistance(new Date(item?.from), new Date(item?.to));
        }
    };
 
    const listOfWorkExperience = experience.map((item: any, index: number) => (
            <section className='border border-dashed border-gray p-2' key={index}>
                <p className='font-semibold text-md'> {item.company} </p>
                <p className='text-[darkgray]'> {item.position} </p>
                <p className='text-[darkgray]'> 
                    {item?.startDate && format(new Date(item?.startDate), 'MMM y')} - {item?.endDate ? format(new Date(item?.endDate), 'MMM y') : 'Present'} - {formatTheDistance(item)}
                </p>
                <br />
                {item.responsibilities && (
                    <section>
                        <h3 className='font-semibold text-md'> Responsibilities </h3> 
                        <p> {item.responsibilities} </p>
                    </section>
                )}
            </section>
    ));

    return (
        <ApplyCard>
            <ApplyTitle> Work Experience </ApplyTitle>
            <ApplySubTitle>
                Okay. If applicable, please add your work experience.
            </ApplySubTitle>
            <ApplyDescription>
                Profiles with relevant work experience are <span className='font-semibold text-[green]'>15x</span> more likely to get hired.
            </ApplyDescription>
            <ApplyContent>
                <Dialog>
                    {fields.length === 0
                        ? (
                            <Button
                                className='flex justify-center h-30 bg-background text-foreground border-2 border-dashed border-gray hover:bg-gray hover:cursor-pointer py-4 px-5'
                                disabled={checked}
                                asChild
                            >
                                <DialogTrigger className='h-full' disabled={checked}>
                                    <section className='flex flex-col py-10 justify-center items-center'>
                                        <FiPlus className='text-4xl font-extrabold' />
                                        <h2 className='font-extrabold mt-3 text-md'> Add work experience </h2>
                                        <p className='text-center'> Show clients your work experience to boost your chances. </p>
                                    </section>
                                </DialogTrigger>
                            </Button>
                        )
                        : listOfWorkExperience}

                    {fields.length > 0 && (
                        <DialogTrigger
                            className='w-full my-2 hover:opacity-80 px-4 py-2 text-white bg-primary hover:cursor-pointer'
                        > 
                        Add More
                    </DialogTrigger>
                    )}
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle> Add Qualification </DialogTitle>
                            <DialogDescription> Add your previously completed courses or certifications to show case your skills to clients. </DialogDescription>
                        </DialogHeader>
                        <section className='py-4'>
                            <Form {...form}>
                            <form onSubmit={form.handleSubmit(handleExperience)} className='flex flex-col gap-3'>
                                <FormField
                                    control={form.control}
                                    name='experience.company'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel htmlFor='experience.company'> Company </FormLabel>
                                            <FormControl>
                                                <Input {...field} placeholder='Eg. Amazon' />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name='experience.position'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel htmlFor='experience.position'> Position </FormLabel>
                                            <FormControl>
                                                <Input {...field} placeholder='Eg. Software Engineer' />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name='experience.responsibilities'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel htmlFor='experience.position'> Responsibilities </FormLabel>
                                            <FormControl>
                                                <Textarea {...field} placeholder='What are/were your job responsibilities?' />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name='experience.startDate'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel htmlFor='experience.startDate'> From </FormLabel>
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
                                                                    <span> Started date </span>
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

                                <FormField
                                    control={form.control}
                                    name='experience.endDate'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel htmlFor='experience.endDate'> To </FormLabel>
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
                                                                    <span> Graduated date </span>
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
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField 
                                    control={form.control}
                                    name='experience.isStillWorking'
                                    defaultValue={false}
                                    render={({ field }) => (
                                        <FormItem className='flex items-center justify-between'>
                                            <section>
                                                <FormLabel className='text-base'> I am still studying </FormLabel>
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

                <section className='flex gap-3 my-3'>
                    <input type='checkbox' id='checked' onChange={(e) => setChecked(e.target.checked)} disabled={experience.length > 0} className='self-start' />
                    <section className='self-start'>
                        <label htmlFor="checked" className='text-base font-bold'> I don&apos;t have a work experience. </label>
                        <p className='text-sm'> Check this if you don&apos;t have a qualification as of yet. You will edit later. </p>
                    </section>
            </section>
        </ApplyContent>
        <ApplyFooter>
            <Button type='button' onClick={() => router.push('/apply/education')} className='bg-white flex-1' variant='outline'> Back </Button>
            <Button 
                type='button' 
                onClick={handleNextStep} 
                className='bg-primary flex-1' 
                disabled={!form.formState.isValid && !checked}
            > 
            Next Step 
        </Button>
        </ApplyFooter>
        </ApplyCard>
    );
};

export default WorkExperience;
