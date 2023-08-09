/* eslint-disable react/jsx-key */

import Head from 'next/head';
import React from 'react';
import { generateRanomId } from '../../../utilities/generateRandomId';
import { ClientProject } from './clientProject';
import { clients } from './clients';

export const ListProjects = () => {
    return (
        <section>
            <Head>
                <title> Browse list of projects - Duello </title>
            </Head>
            {clients.map((client) => <ClientProject key={generateRanomId()} {...client} /> )}
        </section>
    );
};
