import React from 'react';
import Preview from './preview';

export default function PreviewPage() {
    return (
        <section className='container divide divide-x-2 flex justify-between'>
            <section className='md:flex-[0.6]'>
                <Preview />
            </section>
            <section className='flex-[0.3] p-3 max-md:hidden' />
        </section>
    );
}
