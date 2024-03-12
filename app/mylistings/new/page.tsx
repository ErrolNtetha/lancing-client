import React from 'react';
import NewList from '../../../components/templates/myList/new';
import { COMPANY_NAME } from '../../../constants/companyName';

export default function New() {
    return (
        <section>C
            <head>
                <title> Add New Listing | {COMPANY_NAME} </title>
            </head>
            <NewList />
        </section>
    );
};
