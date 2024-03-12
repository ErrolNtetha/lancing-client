import React from 'react';
import OfferDetails from '../../../components/organisms/vendor/offer/offerDetails';
import { COMPANY_NAME } from '../../../constants/companyName';

export default function OfferPage() {

    return (
        <section className='mb-8 h-[90vh] p-3'>
            <head>
                <title> An Offer | {COMPANY_NAME} </title>
            </head>
            <OfferDetails />
        </section>
    );
};
