import React from 'react'
import { FiFrown } from 'react-icons/fi';
import CardContainer from './cardContainer';

type DeclinedOfferCardProps = {
    user: {
        firstName: string;
        lastName: string;
    };
    href: string;
    title: string;
    iconsClassName: string;
    createdAt: {
        nanoseconds: string | number;
    };
}

export default function DeclinedOfferCard({ user, href, iconsClassName, createdAt }: DeclinedOfferCardProps) {
    const username = <span className='font-bold'>{user?.firstName} {user?.lastName}</span>;
    const title = <span className='font-bold'>I will develop a mobile application</span>;

    return (
        <CardContainer
            href={href}
            icon={<FiFrown className={iconsClassName} />}
            createdAt={createdAt}
        >
            <section className='mb-1'>
                <h6 className='pb-1'> 
                    {username} has declined your offer.
                </h6>
                <section className='p-2 border border-gray-200 bg-gray-100 rounded-md'>
                    <p className='text-xs'> Your offer has been declined for &apos;{title}&apos;. </p>
                </section>
            </section>
        </CardContainer>
    );
}
