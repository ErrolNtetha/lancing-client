'use client'

import { collection, doc, getDocs, query, where } from 'firebase/firestore';
import React, { useState } from 'react'
import { Separator } from '../../../../@/components/ui/separator';
import { db } from '../../../../firebaseConfig';
import { useAuth } from '../../../../hooks/useAuth';
import OfferCard from './offerCard';
// import { offers } from './offers';

export default function ListOffersCards() {
    const { currentUser } = useAuth();
    const [offers, setOffers] = useState<any>([]);

    React.useEffect(() => {
        const getOffers = async () => {
            const offersRef = collection(db, 'offers');
            const q = query(offersRef, where('to', '==', doc(db, `users/${currentUser?.uid}`)));

            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                console.log(doc.data());
                setOffers((prevState: any) => [...prevState, { id: doc.id, ...doc.data() }]);
            });
        };

        getOffers();
    }, [currentUser]);

    const listOffers = offers.map((item: any) => <OfferCard key={item.id} {...item} />);

    return (
        <section className='flex-[0.3] md:border md:border-gray-200 md:rounded-md md:p-2'>
            <section className='mb-3'>
                <h1 className='font-bold text-lg'> Offers ({offers.length}) </h1>
                <Separator />
            </section>
            <section className='divide-y divide-gray-200'>
                {!offers.length 
                    ? <p className='p-3'> You have no offers yet. </p>
                    : listOffers
                }
            </section>
        </section>
    );
};
