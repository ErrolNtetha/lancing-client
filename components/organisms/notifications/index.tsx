import React from 'react';
import AcceptedOfferCard from './cardTypes/acceptedOfferCard';
import DefaultCard from './cardTypes/defaultCard';
import IncomingOfferCard from './cardTypes/incomingOfferCard';
import DeclinedOfferCard from './cardTypes/incomingOfferCard';
import IncomingProposalCard from './cardTypes/incomingProposalCard';

const NOTIFICATION_TYPES = {
    INCOMING_OFFER: 'incomingOffer',
    INCOMING_PROPOSAL: 'incomingProposal',
    ACCEPTED_OFFER: 'acceptedOffer',
    DECLINED_OFFER: 'declinedOffer',
}

const n = [
    {
        id: 2,
        type: NOTIFICATION_TYPES.ACCEPTED_OFFER,
        offerDescription: 'Thank you',
        user: {
            firstName: 'Sibusiso',
            lastName: 'Radebe'
        },
        createdAt: {
            nanoseconds: '7 minutes ago',
        },
        href: '/offers/jfajbHWi3jaw3xwZlas32M23OFdafjw1'
    },
    {
        id: 1,
        type: NOTIFICATION_TYPES.DECLINED_OFFER,
        user: {
            firstName: 'Alex',
            lastName: 'Smith'
        },
        createdAt: {
            nanoseconds: '2 minutes ago',
        },
        href: '/projects/32fakdjfh4jaw3-djalj234fad45'
    },
    {
        id: 6,
        type: NOTIFICATION_TYPES.INCOMING_OFFER,
        title: 'Graphic Design and Logo Design',
        user: {
            firstName: 'Sandile',
            lastName: 'Dlamini'
        },
        createdAt: {
            nanoseconds: '3 hours ago',
        },
        href: '/offers/xwZlas32M23OFdafjw1-ad34jaKs'
    },
    {
        id: 3,
        type: NOTIFICATION_TYPES.DECLINED_OFFER,
        title: 'Graphic Design and Logo Design',
        user: {
            firstName: 'Snenhlanhla',
            lastName: 'Dlamini'
        },
        createdAt: {
            nanoseconds: '1 hour ago',
        },
        href: '/offers/xwZlas32M23OFdafjw1-ad34jaKs'
    },

    {
        id: 4,
        type: NOTIFICATION_TYPES.INCOMING_PROPOSAL,
        title: 'Graphic Design and Logo Design',
        user: {
            firstName: 'Mphumeleli',
            lastName: 'Ntetha'
        },
        createdAt: {
            nanoseconds: '1 hour ago',
        },
        href: '/offers/xwZlas32M23OFdafjw1-ad34jaKs'
    },
    {
        id: 5,
        type: NOTIFICATION_TYPES.ACCEPTED_OFFER,
        title: 'Graphic Design and Logo Design',
        user: {
            firstName: 'Sandile',
            lastName: 'Dlamini'
        },
        createdAt: {
            nanoseconds: '3 hours ago',
        },
        href: '/offers/xwZlas32M23OFdafjw1-ad34jaKs'
    },
]

export default function AllNotification() {
    // const [notifications, setNotifications] = React.useState(n);

    const iconClassName = 'text-2xl';

    const renderCard = (props: any) => {
        console.log(props.type);

        switch (props.type) {
            case NOTIFICATION_TYPES.ACCEPTED_OFFER:
                return <AcceptedOfferCard iconsClassName={iconClassName} {...props} />;
            case NOTIFICATION_TYPES.DECLINED_OFFER:
                return <DeclinedOfferCard iconsClassName={iconClassName} {...props} />;
            case NOTIFICATION_TYPES.INCOMING_OFFER:
                return <IncomingOfferCard iconsClassName={iconClassName} {...props} />;
            case NOTIFICATION_TYPES.INCOMING_PROPOSAL:
                return <IncomingProposalCard iconsClassName={iconClassName} {...props} />;
            default:
                return <DefaultCard iconsClassName={iconClassName} {...props} />;
        }
    }

    const notificationCards = n.map((item: any) => renderCard(item));

    return (
        <section className='space-y-1'>
            {notificationCards}
        </section>
    );
}
