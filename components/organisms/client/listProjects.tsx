/* eslint-disable react/jsx-key */

import Head from 'next/head';
import React from 'react';
import { ClientProject } from './clientProject';

const clients = [
    {
        name: {
            firstName: 'Mphumeleli',
            lastName: 'Ntetha'
        },
        occupation: 'Marketing Manager',
        verifiedPayment: true,
        projectDuration: 'Ongoing',
        key: 1,
        photos: 2,
        budget: 2500,
        createdAt: '12 minutes ago',
        avatar: '/assets/images/errol.png',
        projectDescription: 'We are looking for a logo designer who has an experience in designing logos. We are a startup company. Our startup is a cafe. All specification are attached below for your perusal. This is an ongoing project and might need further work done should you satisfy our requirements.'
    },
    {
        name: {
            firstName: 'Zama',
            lastName: 'Radebe'
        },
        occupation: 'Project Manager',
        verifiedPayment: true,
        projectDuration: 'Ongoing',
        key: 2,
        photos: 4,
        budget: 1200,
        createdAt: '17 minutes ago',
        avatar: '/images/users/woman.jpg',
        projectDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates deserunt dignissimos eius. Culpa nostrum aut non eaque, quibusdam qui sit rem eius quasi quae tenetur vero placeat atque, molestiae illum?'
    },
    {
        name: {
            firstName: 'Njabulo',
            lastName: 'Ndlovu'
        },
        occupation: 'Office Administrator',
        verifiedPayment: false,
        projectDuration: 'Once-off',
        key: 3,
        photos: 2,
        budget: 1500,
        createdAt: '32 minutes ago',
        avatar: '/images/users/guy.jpg',
        projectDescription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci quos vero sapiente reiciendis praesentium, error nam vitae rem repudiandae porro fugit eius delectus voluptas soluta!'
    },
]

export const ListProjects = () => {

    return (
        <section>
            <Head>
                <title> Browse Projects and Send Proposals | Duello </title>
            </Head>
                {clients.map((client) => <ClientProject {...client} /> )}
        </section>
    )
}
