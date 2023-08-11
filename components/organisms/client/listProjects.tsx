/* eslint-disable react/jsx-key */

import { collection, getDocs } from 'firebase/firestore';
// import Head from 'next/head';
import React from 'react';
import { db } from '../../../firebaseConfig';
import { generateRanomId } from '../../../utilities/generateRandomId';
import { NoContent } from '../../molecules/noContent';
// import Prompt from '../vendor/prompt';
import { ClientProject } from './clientProject';
// import { clients } from './clients';

export const ListProjects = () => {
    async function getProjects() {
        try {
            const projectsRef = collection(db, 'projects');
            const p = await getDocs(projectsRef);
            p.forEach((doc) => {
                if (!doc) {
                    console.log('no projects');
                    return;
                }
                console.log('Projects data: ', doc.data());
            });
        } catch (error) {
            console.log(error);
        }
    };

    const clientsProjects = getProjects();

    //@ts-ignore
    const projects = !clientsProjects?.length
        ? <NoContent 
            main='No projects yet.'
            body=' Projects posted by clients will appear here. Check back later.'
        />
        // @ts-ignore
        : clientsProjects.map((project: any) => <ClientProject key={generateRanomId()} {...project} />);

    return (
        <section className='flex-1 h-[92vh]'>
            {projects}
        </section>
    );
};
