import formatDistance from 'date-fns/formatDistance'
import Link from 'next/link'
import React from 'react'
import { formatAmountSuffix } from '../../../../utilities/format'
import { StarRating } from '../../../molecules/star-rating'

type OfferProps = {
    id: string;
    client: {
        names: {
            firstName: string;
            lastName: string;
        };
        amountSpent: number | null;
        rating: number;
    };
    createdAt: Date | string;
}

export default function OfferCard({ client, id, createdAt }: OfferProps) {
    const { names, rating, amountSpent } = client;

    return (
        <Link className='flex justify-between hover:bg-gray-100 p-2' href={`offers/${id}`}>
            <span>
                <h3 className='font-medium text-sm'> {names?.firstName} {names?.lastName} </h3>
                <p className='text-sm'> <StarRating value={rating} /> </p>
                <p className='text-sm'> Spent: <span className='font-bold text-[green]'> R{formatAmountSuffix(amountSpent)} </span> </p>
            </span>
            <span className='flex flex-col gap-2'>
                <p className='text-xs mb-1'> {formatDistance(new Date(createdAt), new Date(), { addSuffix: true, includeSeconds: true })} </p>
            </span>
        </Link>
    );
};
