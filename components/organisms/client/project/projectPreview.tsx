import React from 'react';
import { Separator } from '../../../../@/components/ui/separator';

type PreviewProps = {
    title: string;
    description: string;
}

export default function ProjectPreview({ title, description }: PreviewProps) {
    return (
        <section className='border border-gray-200 bg-gray-100 rounded-md p-3 mb-3'>
            <section className='text-sm mb-2'>
                <h1 className='font-bold text-md'> {title} </h1>
                <Separator />
                <p className='mt-2'>
                    {description}
                </p>
            </section>
        </section>
    );
};
