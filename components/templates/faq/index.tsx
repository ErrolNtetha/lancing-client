'use client'

import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../../@/components/ui/accordion';

export default function FAQPage() {
    return (
        <section className=''>
            
            <Accordion type='single' collapsible className='w-full'>
                <AccordionItem value='item-1'>
                    <AccordionTrigger> What is Tedcrunch? </AccordionTrigger>
                    <AccordionContent>
                        It a freelancing marketplace for businesses and individuals alike.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-2'>
                    <AccordionTrigger> What makes it different? </AccordionTrigger>
                    <AccordionContent>
                        Tedcrunch only focuses on ensuring clients are satisfied with their deliverables.
                        We offer highly skilled freelancers to make sure you get the best service possible.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-3'>
                    <AccordionTrigger> Why do freelancers have to be vetted? </AccordionTrigger>
                    <AccordionContent>
                        All freelancers registering on our platform need to be vetted before applying for jobs to ensure legitimacy.
                        It is our platform&apos;s standard procedure.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-4'>
                    <AccordionTrigger> Is Tedcrunch international? </AccordionTrigger>
                    <AccordionContent>
                        No. But it is part of our plans to go international in the future.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>
    );
};
