import React from 'react';
import { Separator } from '../../../../@/components/ui/separator';
import ProjectLoader from '../../../templates/projects/projectId/create-proposal/skeleton';

type PreviewProps = {
    title: string;
    description: string;
    loading: boolean;
}

export default function ProjectPreview({ title, description, loading }: PreviewProps) {
    return (
        <section className='border border-gray-200 bg-gray-50 rounded-md p-3 mb-3'>
            {loading 
                ? <ProjectLoader />
                : (
                    <section className='text-sm mb-2'>
                        <h1 className='font-bold text-md'> {title} </h1>
                        <Separator />
                        <p className='mt-2'>
                            {description}
                        </p>
                    </section>
                )
            }
        </section>
    );
};
