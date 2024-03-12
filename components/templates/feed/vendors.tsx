import React from 'react';
import ListCards from '../../organisms/vendor/feed/listCards';

/*
 *  Create a UI for displaying vendors 
 *  This is what clients are going to see and browse
 *
 */

export default function Vendors() {
    return (
        <section className='md:flex w-full my-2 divide divide-gray-50'>
            <aside className='flex-[20%] hidden shadow-md rounded-md border border-gray-100 md:block text-center text-gray-700'>
                filter function coming soon
            </aside>
            <section className='md:flex-[80%] mb-8 border border-gray-100 rounded-md p-2'>
                <ListCards />
            </section>
        </section>
    );
};
