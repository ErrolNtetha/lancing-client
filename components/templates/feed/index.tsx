import Head from 'next/head';
import React from 'react';
import { useProfileStore } from '../../../hooks/useGlobalStore';
import { Client } from '../../organisms/client/';

export const ClientUI = () => {
    const role = useProfileStore((state) => state?.profile?.role);
    const render = role === 'client' ? <Client /> : 'Vendor';

    return (
        <section>
            <Head>
                <title> Feed | Duello </title>
            </Head>

            {render}
        </section>
    )
}
