import React from 'react'
import { Skeleton } from '../../../../@/components/ui/skeleton'

export default function ListLoader() {
    return (
        <section className='space-y-4 p-2 md:max-w-lg border border-gray-50'>
            <Skeleton className='h-4 w-[200px]' />
            <section className='space-y-2'>
                <Skeleton className='h-4 w-full' />
                <Skeleton className='h-4 w-[250px]' />
            </section>
            <Skeleton className='h-40 w-full' />
            <section className='flex justify-between'>
                <section className='space-y-2'>
                    <Skeleton className='h-6 w-16' />
                    <Skeleton className='h-8 w-24' />
                </section>
                <section>
                    <Skeleton className='h-8 w-[100px]' />
                </section>
            </section>
        </section>
    );
}
