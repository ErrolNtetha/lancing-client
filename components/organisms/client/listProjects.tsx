/* eslint-disable react/jsx-key */

import React from 'react';
import { useFetchProjects } from '../../../hooks/useFetchProjects';
import { ClientProject } from './clientProject';

export const ListProjects = () => {
    const { docs } = useFetchProjects();

    return (
        <React.Fragment>
            <section className='h-[92vh]'>
                {
                    !docs.length 
                    ? (
                        <section className='flex justify-center items-center h-full'> 
                            <span className='text-center w-[80%]'>
                                <p className='font-bold'> No projects yet. </p>
                                <p className='py-3 text-sm md:text-md'> 
                                    Projects posted by clients will appear here. Check back later. 
                                </p>
                            </span>
                        </section>)
                    //@ts-ignore
                    : docs.map((doc: any) => {
                        const { id, project } = doc;
                        if (project.postedBy) {
                            return (
                                <ClientProject
                                    key={id}
                                    projectId={id}
                                    {...project.postedBy}
                                    {...project}
                                />
                            )
                        }
                    })
                }
            </section>
        </React.Fragment>
    );
};
