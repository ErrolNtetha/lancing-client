import Head from 'next/head';
import React from 'react';
import { ClientProject } from '../../organisms/project';

const users = [
    {
        name: {
            firstName: 'Mphumeleli',
            lastName: 'Ntetha'
        },
        occupation: 'Marketing Manager',
        projectDuration: 'Ongoing',
        key: 1,
        photos: 2,
        budget: 2500,
        createdAt: '12 minutes ago',
        projectDescription: 'We are looking for a logo designer who has an experience in designing logos. We are a startup company. Our startup is a cafe. All specification are attached below for your perusal. This is an ongoing project and might need further work done should you satisfy our requirements.'
    },
    {
        name: {
            firstName: 'Syanda',
            lastName: 'Dlamini'
        },
        occupation: 'Project Manager',
        projectDuration: 'Ongoing',
        key: 2,
        photos: 4,
        budget: 1200,
        createdAt: '17 minutes ago',
        projectDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates deserunt dignissimos eius. Culpa nostrum aut non eaque, quibusdam qui sit rem eius quasi quae tenetur vero placeat atque, molestiae illum?'
    },
    {
        name: {
            firstName: 'Kwanele',
            lastName: 'Dlamini'
        },
        occupation: 'Office Administrator',
        projectDuration: 'Once-off',
        key: 3,
        photos: 2,
        budget: 1500,
        createdAt: '32 minutes ago',
        projectDescription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci quos vero sapiente reiciendis praesentium, error nam vitae rem repudiandae porro fugit eius delectus voluptas soluta!'
    },
]

export const Client = () => {
    return (
        <section>
            <Head>
                <title> Browse Projects and Send Proposals | Duello </title>
            </Head>

            {users.map((user) => (
                //@ts-ignore
                <ClientProject {...user} />
            ))}
        </section>
    )
}
