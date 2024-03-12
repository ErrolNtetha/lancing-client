import React, { Suspense } from 'react';
import MyList from '../../components/templates/myList';
import { COMPANY_NAME } from '../../constants/companyName';

export default function MyLists() {
    return (
        <section>
            <head>
                <title> My Listings | {COMPANY_NAME} </title>
            </head>
            <MyList />
        </section>
    );
}
