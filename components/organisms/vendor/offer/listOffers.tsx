'use client'

import React from 'react'
import { Separator } from '../../../../@/components/ui/separator';
import OfferCard from './offerCard';
import { offers } from './offers';

export default function ListOffersCards() {
    const listOffers = offers.map((item) => <OfferCard key={item.id} {...item} />);

    return (
        <section className='flex-[0.3] md:border md:border-gray-200 md:rounded-md md:p-2'>
            <section className='mb-3'>
                <h1 className='font-bold text-lg'> Offers ({offers.length}) </h1>
                <Separator />
            </section>
            <section className='divide-y divide-gray-200'>
                {!offers.length 
                    ? <p className='p-3'> You have no offers yet. </p>
                    : listOffers
                }
            </section>
        </section>
    );
};
