// ts-nocheck

'use client'

import { useParams } from 'next/navigation';
import React from 'react';
import OfferContent from '../../../molecules/offer/offerContent';
import OfferFooter from '../../../molecules/offer/offerFooter';
import OfferHeader from '../../../molecules/offer/offerHeader';
import { offers } from './offers';

const handleAcceptOffer = () => {
    console.log('offer accepted');
};

const handleDeclineOffer = () => {
    console.log('offer declined');
};

export default function OfferDetails() {
    const params = useParams();
    const foundOffers = offers?.find(({ id }) => id === params?.offerId);

    return (
        <section className='mb-8 h-[90vh]'>
            <OfferHeader client={foundOffers?.client!}  />
            <OfferContent 
                description={foundOffers?.project_details?.description}
                timeline={foundOffers?.timeline_and_deadlines!}
            />
            <OfferFooter
                handleAcceptOffer={handleAcceptOffer}
                handleDeclineOffer={handleDeclineOffer}
            />
        </section>
    );
};
