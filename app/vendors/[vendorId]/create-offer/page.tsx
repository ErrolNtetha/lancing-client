import React from 'react';
import Offer from '../../../../components/templates/vendorProfile/createOffer';
import { COMPANY_NAME } from '../../../../constants/companyName';

export default function CreateOffer() {
    return (
        <section className='p-3'>
            <head>
                <title> Create Offer | {COMPANY_NAME} </title>
            </head>
            <Offer />
        </section>
    );
};
