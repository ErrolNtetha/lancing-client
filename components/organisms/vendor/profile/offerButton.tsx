import Link from 'next/link';
import React from 'react';
import { Button } from '../../../../@/components/ui/button';

type SendOfferProps = {
    id: string;
}

export default function SendOfferButton({ id }: SendOfferProps) {
    return (
        <Button variant='link' className='w-full'>
            <Link href={`vendors/${id}/create-offer`}>
                Send Offer
            </Link>
        </Button>
    );
};
