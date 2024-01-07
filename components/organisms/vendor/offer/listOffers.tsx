'use client'

import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import React, { useState } from 'react'
import { Separator } from '../../../../@/components/ui/separator';
import { db } from '../../../../firebaseConfig';
import { useAuth } from '../../../../hooks/useAuth';
import OfferCard from './offerCard';
// import { offers } from './offers';

export default function ListOffersCards() {
    const { currentUser } = useAuth();
    const [offers, setOffers] = useState<any>([]);
    const [author, setAuthor] = useState<any>({});

    React.useEffect(() => {
        const getOffers = async () => {
            const offersRef = collection(db, 'offers');
            const q = query(offersRef, where('to', '==', doc(db, `users/${currentUser?.uid}`)));

            const getAuthor = async (authorId: any) => {
                const authorRef = doc(db, authorId);
                const authorDoc = await getDoc(authorRef);

                if (authorDoc.exists()) {
                    setAuthor(author.data());
                }
            }

            const querySnapshot = await getDocs(q);
            for (let doc of querySnapshot.docs) {
                console.log(doc.data());
                getAuthor(doc.data()?.to);
                setOffers((prevState: any) => [...prevState, { id: doc.id, ...author, ...doc.data() }]);
            }

            querySnapshot.forEach((doc) => {


            });
        };

        getOffers();
    }, [currentUser, author]);

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
