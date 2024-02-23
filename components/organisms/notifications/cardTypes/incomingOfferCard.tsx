import React from 'react'
import { FiCornerRightDown } from 'react-icons/fi';
import CardContainer from './cardContainer';

type IncomingOfferCardProps = {
    user: {
        firstName: string;
        lastName: string;
    };
    href: string;
    iconsClassName: string;
    createdAt: {
        nanoseconds: string | number;
    };
}

export default function IncomingOfferCard({ user, href, iconsClassName, createdAt }: IncomingOfferCardProps) {
    const username = <span className='font-bold'>{user?.firstName} {user?.lastName}</span>;
    
    return (
        <CardContainer
            href={href}
            icon={<FiCornerRightDown className={iconsClassName} />}
            createdAt={createdAt}
        >
            <section className='mb-1'>
                <h6 className='pb-1'> 
                    You have received a new offer!
                </h6>
                <section className='p-2 border border-gray-200 bg-gray-100 rounded-md'>
                    <p className='text-xs'> {username} has sent you a new offer. Check it now. </p>
                </section>
            </section>
        </CardContainer>
    );
}
