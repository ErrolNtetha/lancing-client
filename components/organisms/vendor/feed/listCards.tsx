import React from 'react';
import Card from './card';
import { lists } from '../myList/lists';
import { collection, getDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../../firebaseConfig';

export default function ListCards() {
    const [cards, setCards] = React.useState<any>([]);

    const getAuthor = async(authorRef: any) => {
        const doc = await getDoc(authorRef);

        if (doc.exists()) {
            return doc.data();
        }
    };

    React.useEffect(() => {
        async function getCards() {
            const listsRef = collection(db, 'lists');
            const q = query(listsRef, where('isActive', '==', true));

            const querySnapShot = await getDocs(q);

            for (let doc of querySnapShot.docs) {
                const author = await getAuthor(doc?.data()?.author);
                // @ts-ignore
                setCards((prevState: any) => [ ...prevState, {  id: doc.id, ...author, ...doc.data() }]);
            }
        }

        getCards();
    }, []);

    const renderCards = cards.map((item: any) => (
        <Card
            key={item.id}
            id={item.id}
            names={item.names}
            cover={item.cover}
            description={item.description}
        />
    ))
    return (
        <section className='grid md:grid-cols-3 gap-4'>
            {renderCards}
        </section>
    );
};
