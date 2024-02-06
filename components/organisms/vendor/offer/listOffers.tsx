'use client'

import { collection, doc, DocumentReference, getDoc, getDocs, query, where } from 'firebase/firestore';
import React from 'react'
import { Separator } from '../../../../@/components/ui/separator';
import { db } from '../../../../firebaseConfig';
import { useAuth } from '../../../../hooks/useAuth';
import OfferCard from './offerCard';
// import { offers } from './offers';

export default function ListOffersCards() {
    const [offers, setOffers] = React.useState<any>([]);
    const { currentUser } = useAuth();
    console.log(currentUser?.uid);

    async function getAuthor(uid: DocumentReference) {
        const author = await getDoc(uid);

        if (author.exists()) {
            return author;
        }
    }

    React.useEffect(() => {
        async function getOffers() {
            const offersRef = collection(db, 'offers');
            const q = query(offersRef, where('to', '==', doc(db, `users/${currentUser?.uid}`)));

            const querySnapshot = await getDocs(q);
            if (!querySnapshot.docs.length) {
                console.log('No offers found...');
            } else {
                for (let doc of querySnapshot.docs) {
                    const { from, createdAt } = doc.data();
                    const client = await getAuthor(from);

                    console.log({ id: doc.id, author: client?.data() });
                    setOffers((prevState: any) => [...prevState, { id: doc.id, createdAt, client: client?.data() }]);
                }
            } 
        }

        getOffers();
    }, [currentUser?.uid]);


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
