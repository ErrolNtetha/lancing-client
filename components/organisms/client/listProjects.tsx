/* eslint-disable react/jsx-key */

import Head from 'next/head';
import React from 'react';
import { generateRanomId } from '../../../utilities/generateRandomId';
import Prompt from '../vendor/prompt';
import { ClientProject } from './clientProject';
import { clients } from './clients';

export const ListProjects = () => {
    return (
        <section>
            <Head>
                <title> Browse list of projects - Duello </title>
            </Head>
            <Prompt />
            {clients.map((client) => <ClientProject key={generateRanomId()} {...client} /> )}
        </section>
    );
};
