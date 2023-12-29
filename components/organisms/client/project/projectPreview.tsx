import React from 'react';
import { Separator } from '../../../../@/components/ui/separator';

export default function ProjectPreview() {
    return (
        <section className='border border-gray-200 bg-gray-100 rounded-md p-3 mb-3'>
            <section className='text-sm mb-2'>
                <h1 className='font-bold text-md'> Urgently looking for a Logo Designer </h1>
                <Separator />
                <p className='mt-2'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, placeat distinctio, ad eligendi aut voluptas aspernatur tenetur temporibus magnam ratione, eveniet unde tempora aliquam vero necessitatibus culpa sed error nihil!
                </p>
            </section>
        </section>
    );
};
