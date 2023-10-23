// @ts-nocheck
'use client'

// import { format } from 'date-fns';
import { format, isPast } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { FiPlus } from 'react-icons/fi';
import { Button } from '../../../@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../../../@/components/ui/dialog';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../../../@/components/ui/form';
import { Input } from '../../../@/components/ui/input';
import { Calendar } from '../../../@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../@/components/ui/popover";
import { Switch } from '../../../@/components/ui/switch';
import { cn } from '../../../@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useEducationStore } from '../../../hooks/useGlobalStore';
import { useRouter } from 'next/navigation';
import { Checkbox } from '../../../@/components/ui/checkbox';

const educationSchema = z.object({
    education: z.object({
        fieldOfStudy: z.string().min(5, 'Field of study is too short.'),
        school: z.string().min(5, 'School name is too short.'),
        startDate: z.date(),
        endDate: z.date().optional(),
        isStillStudying: z.boolean().optional(),
    }),
})

const Education = () => {
    const { education, addEducation } = useEducationStore();
    const [checked, setChecked] = React.useState(false);
    const form = useForm({
        mode: 'onSubmit',
        resolver: zodResolver(educationSchema),
        defaultValues: {
            qualification: education,
        }
    });
    const { control } = form;
    const router = useRouter();

    const { fields, append } = useFieldArray({
        control,
        name: 'qualification',
    });

    const handleEducationSubmit = (data: any) => {
        const { education } = data;

        append(education);
        addEducation(education);
    };

    const handleNextStep = () => {
        /* Save data to database before moving to the next step */
        router.push('/apply/work-experience');
    };
 
    const listOfQualifications = education.map((item: any, index: number) => (
        <section key={index} className='my-3'>
            <section className='border border-dashed border-gray p-2'>
                <p> <span className='font-semibold'> {item.school} </span> </p>
                <p> {(item.endDate && isPast(item.endDate)) ? 'Studied' : 'Studying'} <span className='font-semibold'> {item.fieldOfStudy} </span></p>
                {isPast(item.endDate) && <p> Graduated on: <span className='font-semibold'> {format(item.endDate, 'MMM y')} </span></p>}
            </section>
        </section>
    ));

    return (
        <section className='w-lg'>
            <h3 className='font-semibold text-md text-gray'> Education </h3>
            <h3 className='font-semibold text-2xl'>
                Add courses or certifications you have acquired previously.
            </h3>
            <p className='text-md mb-4'> 
                Adding your qualifications often increase chances of you getting hired.
            </p>

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
                                        <h2 className='font-extrabold mt-3 text-md'> Add school or course </h2>
                                        <p className='text-center'> Show clients the courses or certifications you have under your belt. </p>
                                    </section>
                                </DialogTrigger>
                            </Button>
                        )
                        : listOfQualifications}

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
                            <form onSubmit={form.handleSubmit(handleEducationSubmit)} className='flex flex-col gap-3'>
                                <FormField
                                    control={form.control}
                                    name='education.fieldOfStudy'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel htmlFor='fieldOfStudy'> Field of Study </FormLabel>
                                            <FormControl>
                                                <Input {...field} placeholder='Eg. Business Administration' />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name='education.school'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel htmlFor='qualification.school'> School </FormLabel>
                                            <FormControl>
                                                <Input {...field} placeholder='Eg. Durban University of Technology' />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name='education.startDate'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel htmlFor='qualification.from'> From </FormLabel>
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
                                    name='education.endDate'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel htmlFor='to'> To </FormLabel>
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
                                    name='education.isStillStudying'
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
                    <input type='checkbox' id='checked' onChange={(e) => setChecked(e.target.checked)} disabled={education.length > 0} className='self-start' />
                    <section className='self-start'>
                        <label htmlFor="checked" className='text-base font-bold'> I don&apos;t have a qualification. </label>
                        <p className='text-sm'> Check this if you don&apos;t have a qualification as of yet. You will edit later. </p>
                    </section>
                </section>

                <section className='mt-4 w-full flex gap-4'>
                    <Button type='button' className='bg-white flex-1' variant='outline'> Back </Button>
                    <Button 
                        type='button' 
                        onClick={handleNextStep} 
                        className='bg-primary flex-1' 
                        disabled={!form.formState.isValid && !checked}
                    > 
                    Next Step 
                    </Button>
                </section>
        </section>
    );
};

export default Education;
