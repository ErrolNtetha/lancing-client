'use client'

import { useParams } from 'next/navigation';
import React from 'react';

export default function OfferDetails() {
    const params = useParams();

    return (
        <section className='h-[90vh] p-3'>
            <p className='font-bold'> Offer ID: {params?.offerId} </p>
        </section>
    );
};
