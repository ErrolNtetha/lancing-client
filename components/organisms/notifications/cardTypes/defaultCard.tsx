import React from 'react'
import { FiThumbsUp } from 'react-icons/fi';
import CardContainer from './cardContainer';

type IncomingOfferCardProps = {
    href: string;
    iconsClassName: string;
    createdAt: {
        nanoseconds: string | number;
    }
}

export default function DefaultCard({ iconsClassName, createdAt, href }: IncomingOfferCardProps) {
    // const username = <span className='font-bold'>{user?.firstName} {user?.lastName}</span>;
    
    return (
        <CardContainer
            href={href} 
            icon={<FiThumbsUp className={iconsClassName} />}
            createdAt={createdAt}
        >
            <p className='line-clamp-1'>
                Announcement: Check out our new feature. Tell us what you think about this new feature!
            </p>
        </CardContainer>
    );
}
