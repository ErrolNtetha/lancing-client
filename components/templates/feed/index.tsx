import Head from 'next/head';
import React from 'react';
import { useProfileStore } from '../../../hooks/useGlobalStore';
import { Client } from '../../organisms/client/';
import { Vendor } from '../../organisms/vendor';

export const ClientUI = () => {
    const isClient = useProfileStore((state) => state.profile?.isClient);
    const renderUI = isClient ? <Vendor /> : <Client />;

    return (
        <>
            <Head>
                <title> Feed | Duello </title>
            </Head>

            {renderUI}
        </>
    );
};
