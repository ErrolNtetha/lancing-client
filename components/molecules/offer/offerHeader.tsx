import Link from 'next/link';
import React from 'react';
import { formatAmountSuffix } from '../../../utilities/format';
import { StarRating } from '../star-rating';

type OProps = {
    client: {
        names: {
            firstName: string;
            lastName: string;
        };
        rating: number;
        amountSpent: number;
    };
}

export default function OfferHeader({ client }: OProps) {
    return (
        <section className='mb-2'>
            <span>
                <p className='text-sm text-gray-600 font-bold'>Offer from</p>
                <Link href='/clients/fo0flaje21hkjf-afje2jald' className='font-semibold text-lg'> {client?.names?.firstName} {client?.names?.lastName} </Link>
                <span 
                    className='flex items-center gap-2'
                > 
                    <StarRating value={client?.rating} /> 
                    <span className='text-sm'> 
                        ({client?.rating}/5) 
                    </span> -
                    Spent: <span className='text-[green] text-sm font-semibold'> R{formatAmountSuffix(client?.amountSpent)} </span>
                </span>
            </span>
        </section>
    );
};
