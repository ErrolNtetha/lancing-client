/* eslint-disable react-hooks/exhaustive-deps */

import { collection, doc, getDocs, query, where } from 'firebase/firestore';
import React, { Suspense } from 'react';
// import Loading from '../../../app/mylistings/loading';
import { db } from '../../../firebaseConfig';
import { useAuth } from '../../../hooks/useAuth';
import CardList from '../../organisms/vendor/myList/cardList';

type ListProps = {
    id: string;
    author: string;
    description: string;
    cover: string;
    isActive: boolean;
    packages: [];
}[]

export default function List() {
    const { currentUser } = useAuth();
    const [allList, setAllLists] = React.useState<any>([]);

    React.useEffect(() => {
        async function getLists() {
            try {
                const listsRef = collection(db, 'lists');

                const q = query(listsRef, where('author', '==', doc(db, `/users/${currentUser?.uid}`)));
                const querySnapshot = await getDocs(q);

                querySnapshot.forEach((doc) => {
                    setAllLists((prevState: ListProps) => [
                        ...prevState,
                        { ...doc.data(), id: doc.id }
                    ]);
                });
            } catch (error) {
                console.log('An error occurred: ', error);
            }
        }

        getLists();
    }, [currentUser?.uid]);

    const allLists = allList.map((item: any) => (
        <CardList 
            key={item.id}
            cover={item.cover}
            category={item.category}
            description={item.description}
            packages={item.packages}
            isActive={item.isActive}
        />
    ));

    return (
        <section className='flex flex-col gap-4'>
            {allLists}
        </section>
    );
};
