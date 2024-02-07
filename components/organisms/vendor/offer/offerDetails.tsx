// ts-nocheck

'use client'

import { doc, DocumentReference, getDoc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { useParams, useRouter } from 'next/navigation';
import React from 'react';
import { useToast } from '../../../../@/components/ui/use-toast';
import { db } from '../../../../firebaseConfig';
import OfferContent from '../../../molecules/offer/offerContent';
import OfferFooter from '../../../molecules/offer/offerFooter';
import OfferHeader from '../../../molecules/offer/offerHeader';

export default function OfferDetails() {
    const [offer, setOffer] = React.useState<any>({});
    const [loading, setLoading] = React.useState(false);
    const { toast } = useToast();
    const params = useParams();
    const router = useRouter();

    async function getAuthor(uid: DocumentReference) {
        const author = await getDoc(uid);

        if (author.exists()) {
            return author;
        }
    }
        
    const handleAcceptOffer = async () => {
        setLoading(true);
        const offerRef = doc(db, `offers/${params?.offerId}`)

        try {
            await updateDoc(offerRef, {
                accepted: true,
                updatedAt: serverTimestamp()
            });

            toast({
                title: 'Offer Accepted',
                description: 'You have successfully accepted the offer'
            });

            router.push(`/offers/${params?.offerId}/activity/add-milestones`);

        } catch(error) {
            console.log('an error occurred');
            toast({
                title: 'Offer Accepted',
                description: 'You have successfully accepted the offer',
                variant: 'destructive'
            });
            
        } finally {
            setLoading(false);
        }
    };

const handleDeclineOffer = () => {
    console.log('offer declined');
};

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
