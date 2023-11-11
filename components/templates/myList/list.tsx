import React from 'react';
import CardList from '../../organisms/vendor/myList/cardList';
import { lists } from '../../organisms/vendor/myList/lists';

export default function List() {
    const allLists = lists.map((item, index) => (
        <CardList 
            key={index}
            cover={item.cover}
            category={item.category}
            description={item.description}
            packages={item.packages}
            isActive={item.isActive}
        />
    ));

    return <section className='flex flex-col gap-4'>{allLists}</section>
};
