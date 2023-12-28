import React, { Suspense } from 'react';
import MyList from '../../components/templates/myList';
import Loading from './loading';

export default function page() {
    return (
        <Suspense fallback={<Loading />}>
            <MyList />
        </Suspense>
    );
};
