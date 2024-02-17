import React from 'react';
import Email from '../../components/templates/confirmEmail';
import { COMPANY_NAME } from '../../constants/companyName';

export default function ConfirmEmail() {
    return (
        <section className='h-[92vh]'>
            <head>
                <title> Confirm Email | {COMPANY_NAME} </title>
            </head>
            <Email />
        </section>
    );
};
