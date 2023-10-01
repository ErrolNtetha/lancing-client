/* eslint-disable react/jsx-key */

import React from 'react';
import { useFetchProjects } from '../../../hooks/useFetchProjects';
import { ClientProject } from './clientProject';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const ListProjects = () => {
    const { docs, loading } = useFetchProjects();

    // const sortByDate = (a: any, b: any) => Number(new Date(b.project.createdAt.seconds)) - Number(new Date(a.project.createdAt.seconds));

    return (
        <>
            <section>
                {
                    loading 
                    ? (
                        <section className='p-3 w-full'>
                            <section className=''> 
                                <section className='w-32'>
                                    <Skeleton count={1} /> 
                                </section>
                                <section className='w-16'>
                                    <Skeleton count={1} /> 
                                </section>
                            </section>
                            <Skeleton count={4} /> 
                            <section className='w-12'>
                                <Skeleton count={1} /> 
                            </section>
                            <section className='flex justify-end'>
                                {/* @ts-ignore */}
                                <Skeleton square width={100} height={30} /> 
                            </section>
                        </section>
                    )
                    : !docs.length
                    ? (
                        <section className='flex justify-center items-center h-[92vh]'>
                            <span className='text-center max-w-md md:w-full'>
                                <p className='font-bold'> No projects yet. </p>
                                <p className='py-3 text-sm md:text-md'> 
                                    Projects posted by clients will appear here. Check back later. 
                                </p>
                            </span>
                        </section>)
                    //@ts-ignore
                    : docs.sort((a, b) => Number(new Date(b.project.createdAt.seconds)) - Number(new Date(a.project.createdAt.seconds))).map((doc: any) => {
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
        </>
    );
};
