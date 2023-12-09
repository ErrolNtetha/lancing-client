import React from 'react';
import Card from './card';
import { lists } from '../myList/lists';

export default function ListCards() {
    const cards = lists.map((item) => (
        <Card
            key={item.id}
            id={item.id}
            names={item.names}
            cover={item.cover}
            description={item.description}
        />
    ))
    return (
        <section className='grid md:grid-cols-3 gap-4'>
            {cards}
        </section>
    );
};
