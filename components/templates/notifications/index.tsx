'use client'

import React from 'react';
import AllNotification from '../../organisms/notifications';

export default function NotificationsPage() {
    return (
        <section className=''>
            <section className='max-md:p-3 md:p-3 md:container'>
                <h4 className='font-bold'> Notifications </h4>
            </section>
            <section className='md:container'>
                <AllNotification />
            </section>
        </section>
    );
}
