'use client'

import { useRouter } from 'next/navigation';
import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { CreateApplication } from './createApplication';

/*
 * Only allow vendors who are loggedin but not approved::: { isClient: false, isApproved: false }
 *
 */

const Apply = () => {
    const { loading, currentUser } = useAuth();
    const router = useRouter();
    
    if (loading) {
        return <section> loading... </section>
    } else if (!currentUser) {
        return router.push('/login');
    }

    return (
        <section className='h-[92vh]'>
            <section className='container flex justify-center px-3 md:p-0 gap-4 '>
                <CreateApplication />
            </section>
        </section>
    );
};

export default Apply;
