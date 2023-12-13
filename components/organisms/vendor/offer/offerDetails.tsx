'use client'

import { useParams } from 'next/navigation';
import React from 'react';
import OfferHeader from '../../../molecules/offer/offerHeader';
import { offers } from './offers';

export default function OfferDetails() {
    const params = useParams();
    const foundOffers = offers.find(({ id }) => id === params?.offerId);

    console.log(foundOffers);

    return (
        <section className='h-[90vh] p-3'>
            This is the header for ID: {params?.offerId}
            {/* <OfferHeader client={foundOffers?.client}  /> */}
        </section>
    );
};
