'use client'

import React from 'react';
import { AuthorizedRoute } from '../../components/organisms/protectedRoutes/authorizedRoute';
// import { useAuth } from '../../hooks/useAuth';
import { CreateApplication } from './createApplication';

const Apply = () => {
    // const { loading, currentUser } = useAuth();

    return (
        <AuthorizedRoute 
            isApproved={false}
            isClient={false}
            authenticated={true}
        >
            <section className='h-[92vh]'>
                <section className='container flex justify-center px-3 md:p-0 gap-4 '>
                    <CreateApplication />
                </section>
            </section>
        </AuthorizedRoute>
    );
};

export default Apply;
