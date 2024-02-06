// ts-nocheck

'use client'

import { doc, DocumentReference, getDoc } from 'firebase/firestore';
import { useParams } from 'next/navigation';
import React from 'react';
import { db } from '../../../../firebaseConfig';
import OfferContent from '../../../molecules/offer/offerContent';
import OfferFooter from '../../../molecules/offer/offerFooter';
import OfferHeader from '../../../molecules/offer/offerHeader';
import { offers } from './offers';

const handleAcceptOffer = () => {
    console.log('offer accepted');
};

const handleDeclineOffer = () => {
    console.log('offer declined');
};

export default function OfferDetails() {
    const [offer, setOffer] = React.useState<any>({});
    const params = useParams();

    async function getAuthor(uid: DocumentReference) {
        const author = await getDoc(uid);

        if (author.exists()) {
            return author;
        }
    }

    React.useEffect(() => {
        async function getOffer() {
            const offerRef = doc(db, `offers/${params?.offerId}`);
            const document = await getDoc(offerRef);

            if (document.exists()) {
                const { from } = document.data();
                const client = await getAuthor(from);
                setOffer({ client: client?.data(), ...document.data(), id: document.id })
            }
        }

        getOffer();
    }, [params?.offerId]);

    return (
        <section className='text-sm h-[90vh]'>
            <OfferHeader client={offer?.client}  />
            <OfferContent 
                description={offer?.description}
                startDate={offer?.startDate}
                deadline={offer?.deadline}
            />
            <OfferFooter
                handleAcceptOffer={handleAcceptOffer}
                handleDeclineOffer={handleDeclineOffer}
            />
        </section>
    );
};
