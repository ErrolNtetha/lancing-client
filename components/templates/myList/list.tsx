import { collection, getDocs, query, where } from 'firebase/firestore';
import React from 'react';
import { db } from '../../../firebaseConfig';
import { useAuth } from '../../../hooks/useAuth';
import CardList from '../../organisms/vendor/myList/cardList';

export default function List() {
    const { currentUser } = useAuth();
    const [allList, setAllLists] = React.useState<any>([]);

    React.useEffect(() => {
        const q = query(collection(db, 'lists'), where('author', '==', `${currentUser?.uid}`));

        async function getLists() {
            const querySnapshot = await getDocs(q);

            querySnapshot.forEach((doc) => {
                console.log(doc.data());
                setAllLists([{ ...doc.data(), id: doc.id }]);
            });
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

    return <section className='flex flex-col gap-4'>{allLists}</section>
};
