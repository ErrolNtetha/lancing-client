import Link from 'next/link';
import React from 'react';
import { Button } from '../../../../@/components/ui/button';

type SendOfferProps = {
    id: string;
}

export default function SendOfferButton({ id }: SendOfferProps) {
    return (
        <Button variant='link' asChild className='text-bold mt-2 border border-gray-50 flex-1'>
            <Link href={`vendors/${id}/create-offer`} className='text-bold'>
                Send Offer
            </Link>
        </Button>
    );
};
