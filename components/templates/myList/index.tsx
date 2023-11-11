import React from 'react';
import List from './list';

export default function MyList() {
    return (
        <section className='m-3 md:container'>
            {/* <h2 className='my-2 font-bold text-lg'> You have 1 listing. </h2> */}
            <List />
        </section>
    );
};
