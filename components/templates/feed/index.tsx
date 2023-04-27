import Head from 'next/head';
import React from 'react';
import { useProfileStore } from '../../../hooks/useGlobalStore';
import { Client } from '../../organisms/client/';

export const ClientUI = () => {
    const isClient = useProfileStore((state) => state.profile?.isClient);
    const renderUI = isClient ? 'Vendor UI' : <Client />;

    return (
        <>
            <Head>
                <title> Feed | Duello </title>
            </Head>

            {renderUI}
        </>
    );
};
