import React from 'react';
import Card from './card';
import { lists } from '../myList/lists';
import { collection, getDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../../firebaseConfig';

export default function ListCards() {
    const [cards, setCards] = React.useState<any>([]);
    const [ratings, setRatings] = React.useState<any>([]);

    const getAuthor = async(authorRef: any) => {
        const doc = await getDoc(authorRef);

        if (doc.exists()) {
            return doc;
        }
    };

    React.useEffect(() => {
        async function getCards() {
            const listsRef = collection(db, 'lists');
            const q = query(listsRef, where('isActive', '==', true));

            const querySnapShot = await getDocs(q);

            for (let doc of querySnapShot.docs) {
                const authorDoc = await getAuthor(doc?.data()?.author);
                const uid = authorDoc?.id;
                const author = authorDoc?.data();
                // @ts-ignore
                setCards((prevState: any) => [ ...prevState, {  uid, id: doc.id, ...author, ...doc.data() }]);
            }
        }

        getCards();
    }, []);

    const renderCards = cards.map((item: any) => (
        <Card
            key={item.id}
            id={item.id}
            uid={item.uid}
            avatar={item.avatar}
            title={item.title}
            packages={item.packages}
            names={item.names}
            cover={item.cover}
            description={item.description}
            ratings={ratings}
        />
    ))
    return (
        <section className='grid md:grid-cols-3 gap-4 mb-8 md:mb-0'>
            {renderCards}
        </section>
    );
};
