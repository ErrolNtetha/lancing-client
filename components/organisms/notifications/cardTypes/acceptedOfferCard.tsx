import Link from 'next/link';
import React from 'react'
import { FiSmile } from 'react-icons/fi';
import CardContainer from './cardContainer';

type AcceptedOfferCardProps = {
    user: {
        firstName: string;
        lastName: string;
    };
    href: string;
    iconsClassName: string;
    offerDescription: string;
    createdAt: {
        nanoseconds: string | number;
    };
}

export default function AcceptedOfferCard({ user, href, iconsClassName, offerDescription, createdAt }: AcceptedOfferCardProps) {
    const username = <span className='font-bold'>{user?.firstName} {user?.lastName}</span>;

    return (
        <CardContainer
            href={href}
            icon={<FiSmile className={iconsClassName} />}
            createdAt={createdAt}
        >
            <section className='mb-1'>
                Hooray! {username} has accepted your offer.
            </section>
        </CardContainer>
    );
}
