import { collection, getDocs, query } from 'firebase/firestore';
import React from 'react';
import { db } from '../../../firebaseConfig';
// import { useAuth } from '../../../hooks/useAuth';
import CardList from '../../organisms/vendor/myList/cardList';
// import { lists } from '../../organisms/vendor/myList/lists';

export default function List() {
    const [allList, setAllLists] = React.useState<any>([]);

    React.useEffect(() => {
        const q = query(collection(db, 'lists'))

        async function getLists() {
            const querySnapshot = await getDocs(q);

            querySnapshot.forEach((doc) => {
                setAllLists([{ ...doc.data(), id: doc.id }]);
            });
        }

        getLists();
    }, []);

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
