// @ts-nocheck
'use client'

// import { format } from 'date-fns';
import { format, isPast } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { FiImage, FiPlus, FiRefreshCw } from 'react-icons/fi';
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
import { usePortfolioStore } from '../../../hooks/useGlobalStore';
import { useRouter } from 'next/navigation';
import { Textarea } from '../../../@/components/ui/textarea';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import Image from 'next/image';

const experienceSchema = z.object({
    portfolio: z.array({
        title: z.string({ required_error: 'This field is required.' }).min(2, 'Position must be at least 2 characters long.'),
        link: z.string().url(),
        description: z.string().min(5, 'Responsibilities must be at least 5 characters long.').optional(),
        cover: z.string().optional(),
    }),
}).required()

const Portfolio = () => {
    const { portfolios, addPortfolio } = usePortfolioStore();
    const [checked, setChecked] = React.useState(false);
    const imageRef = React.useRef<HTMLInputElement | null>(null);
    const form = useForm({
        mode: 'onSubmit',
        resolver: zodResolver(experienceSchema),
    });
    const { control } = form;
    const router = useRouter();

    const { fields, append } = useFieldArray({
        control,
        name: 'portfolio',
    });

    console.log(fields);

    const handleAvatarChange = (e: any) => {
        const imageUrl = e.target.files[0];

        if (imageUrl) {
            const reader = new FileReader();

            reader.readAsDataURL(imageUrl);
            reader.onload = () => {
                if (reader.result) {
                    // @ts-ignore
                    form.setValue('portfolio.cover', reader.result);
                }
            };
        }
    };

    const { portfolio } = form.watch();

    // console.log('Errors: ', form.formState.errors);
    
    const handlePortfolio = (data: z.infer<typeof experienceSchema>) => {
        append({ ...form.watch().portfolio });
        console.log('Portfolio data: ', data);
        return; 

        const { portfolio } = data;

        append(portfolio);
        addPortfolio(portfolio);
    };

    const handleNextStep = () => {
        router.push('/apply/preview');
    };

    const formatTheDistance = (item: any) => {
        if (item.from && item.to) {
            return formatDistance(new Date(item?.from), new Date(item?.to));
        }
    };
 
    const listOfWorkExperience = fields.map((item: any, index: number) => (
            <section className='border border-dashed border-gray p-2' key={index}>
                <p className='font-semibold text-md'> {item.company} </p>
                <p className='text-[darkgray]'> {item.position} </p>
                <p className='text-[darkgray]'> 
                    {item?.startDate && format(new Date(item?.startDate), 'MMM y')} - {item?.endDate ? format(new Date(item?.endDate), 'MMM y') : 'Present'} - {formatTheDistance(item)}
                </p>
                <br />
                {item.description && (
                    <section>
                        <h3 className='font-semibold text-md'> Description </h3> 
                        <p> {item.description} </p>
                    </section>
                )}
            </section>
    ));

    return (
        <section className='w-lg'>
            <h3 className='font-semibold text-md text-gray'> Portfolio </h3>
            <h3 className='font-semibold text-2xl'>
                If applicable, please add your portfolio.
            </h3>
            <p className='text-md mb-4'>
                Add any work you have previously completed. Paste in any links to your external portfolio sites if applicable.
            </p>

                <Dialog>
                    {fields.length === 0
                        ? (
                            <Button
                                className='flex justify-center h-30 bg-background text-foreground border-2 border-dashed border-gray hover:bg-gray hover:cursor-pointer py-4 px-5'
                                disabled={checked}
                                asChild
                            >
                                <DialogTrigger className='w-full h-full' disabled={checked}>
                                    <section className='flex flex-col py-10 justify-center items-center'>
                                        <FiPlus className='text-4xl font-extrabold' />
                                        <h2 className='font-extrabold mt-3 text-md'> Add portfolio item </h2>
                                        <p className='text-center'> Show clients your portfolio to boost your chances of getting hired. </p>
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
                            <DialogTitle> Add Project </DialogTitle>
                            <DialogDescription> Add your most recent project you are proud of. </DialogDescription>
                        </DialogHeader>
                        <section className='py-4'>
                            <Form {...form}>
                            <form onSubmit={form.handleSubmit(handlePortfolio)} className='flex flex-col gap-3'>
                                <FormField
                                    control={form.control}
                                    name='portfolio.company'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel htmlFor='portfolio.title'> Title </FormLabel>
                                            <FormControl>
                                                <Input {...field} placeholder='Eg. Logo Design' />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name='portfolio.description'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel htmlFor='portfolio.description'> Description </FormLabel>
                                            <FormControl>
                                                <Textarea {...field} placeholder='Who was this project for and what tasks were you doing?' />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name='portfolio.link'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel htmlFor='portfolio.link'> Link </FormLabel>
                                            <FormControl>
                                                <Input type='url' {...field} placeholder='Paste a link to this project sample' />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <section>
                                    <input
                                        type='file'
                                        onChange={handleAvatarChange}
                                        ref={imageRef}
                                        hidden
                                    />
                                    {!portfolio?.cover
                                        ? (
                                            <>
                                                <Button className='my-3 w-full' type='button' onClick={() => imageRef.current?.click()} variant='outline'> 
                                                    Upload Cover Photo <FiImage className='ml-2' /> 
                                                </Button>
                                            </>
                                        )
                                        : (
                                            <section className='flex flex-col gap-2 justify-center my-4'> 
                                                <section className='relative w-full border border-gray-100'>
                                                    <AspectRatio ratio={16/9}>
                                                        <Image src={portfolio?.cover} fill={true} alt='Cover image for portfolio item' className='rounded-md object-cover' />
                                                        <Button 
                                                            className='absolute rounded-full m-2 border-2 border-solid top-0 right-0' type='button'
                                                            onClick={() => imageRef.current?.click()}
                                                            variant='outline'
                                                        >
                                                            <FiRefreshCw />
                                                        </Button>
                                                    </AspectRatio>
                                                </section>
                                            </section>
                                    )}
                                    <p className='block text-gray-500'> Recommended size is 1280x720 </p>
                                    <FormMessage />
                                </section>

                                <DialogFooter className='mt-4 w-full flex gap-2'>
                                    <DialogTrigger className='bg-white flex-1' asChild>
                                        <Button className='flex-1' variant='outline'> Cancel </Button>
                                    </DialogTrigger>
                                    <Button type='submit' className='bg-primary flex-1'> Add </Button>
                                </DialogFooter>
                            </form>
                            </Form>
                        </section>
                    </DialogContent>
                </Dialog>

                <section className='flex gap-3 my-3'>
                    <input type='checkbox' id='checked' onChange={(e) => setChecked(e.target.checked)} disabled={portfolios.length > 0} className='self-start' />
                    <section className='self-start'>
                        <label htmlFor="checked" className='text-base font-bold'> I don&apos;t have a portfolio yet. </label>
                        <p className='text-sm'> Check this if you don&apos;t have a portfolio as of yet. </p>
                    </section>
                </section>

                <section className='bg-background fixed left-0 bottom-0 gap-3 p-2 w-full flex'>
                    <Button type='button' onClick={() => router.push('/apply/work-experience')} className='bg-white flex-1' variant='outline'> Back </Button>
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

export default Portfolio;
