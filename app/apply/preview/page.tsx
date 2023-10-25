'use client'

import { format, formatDistance } from 'date-fns';
import React from 'react';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '../../../@/components/ui/avatar';
import { useEducationStore, useExperienceStore, usePersonalStore, useProfileStore } from '../../../hooks/useGlobalStore';
import { Button } from '../../../@/components/ui/button';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';
import { useAuth } from '../../../hooks/useAuth';
import { useRouter } from 'next/navigation';
import { FcBriefcase } from 'react-icons/fc';

export default function Preview() {
    const [loading, setLoading] = React.useState(false);
    const { currentUser } = useAuth();
    const router = useRouter();
    const { personal } = usePersonalStore();
    const { education } = useEducationStore();
    const { experience } = useExperienceStore();
    const { profile } = useProfileStore();
    const { names: { firstName, lastName } } = profile;

    const handleApplicationSubmit = async() => {
            const { avatar, title, bio } = personal;

            if (!(avatar || title || bio || currentUser)) {
                return;
            };
            setLoading(true);

            const userRef = doc(db, 'users', currentUser.uid);

            try {
                const res = await fetch('/api/preview', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ avatar: personal.avatar })
                });

                const data = await res.json();
                const formData = {
                    application: {
                        isApproved: false,
                        status: 'pending', //  'pending' | 'declined' | 'approved'
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    education,
                    experience,
                    ...personal,
                    avatar: data.response
                };

                await setDoc(userRef, formData, { merge: true });
                router.push('apply/application-outcome');
            } catch (error) {
                console.log('error: ', error);
            } finally {
                setLoading(false);
            }

    };

    const listOfExperience = experience.map((item: any, index: number) => (
        <section key={index} className='my-3'>
            <section className='border border-dashed border-gray p-2'>
                <p className='font-semibold text-md'> {item.company} </p>
                <p className='text-[darkgray]'> {item.position} </p>
                <p className='text-[darkgray]'> 
                    {format(item.startDate, 'MMM y')} - {item.endDate ? format(item.endDate, 'MMM y') : 'Present'} - {formatDistance(item.startDate, item.endDate || new Date())}
                </p>
                <br />
                {item.responsibilities && (
                    <section>
                        <h3 className='font-semibold text-md'> Responsibilities </h3> 
                        <p> {item.responsibilities} </p>
                    </section>
                )}
            </section>
        </section>
    ));

    return (
        <section>
            <section>
                <h3 className='font-semibold text-md text-gray'> Preview Profile </h3>
                <h3 className='font-semibold text-2xl'>
                    Done. Confirm if everything is correct and submit your profile.
                </h3>
                <p className='text-md mb-4'> </p>
            </section>
            <section className='mb-4 border-1 border border-gray p-2 rounded-md'>
                <section className='flex gap-3'>
                    <section className='relative border border-gray rounded-full w-[80px] h-[80px]'>
                        <Avatar className='w-full h-full'>
                            <AvatarImage src={personal.avatar} alt='My avatar' />
                            <AvatarFallback>
                                <Image
                                    src='/assets/images/svg/profileIcon.svg'
                                    alt='random image'
                                    width={80}
                                    height={80}
                                />
                            </AvatarFallback>
                        </Avatar>
                    </section>
                    <section>
                        <h3 className='font-bold'> {firstName} {lastName} </h3>
                        <p className='whitespace-pre-wrap'> {personal.title || 'No title...'} </p>
                    </section>
                </section>
                <section className='mt-3'>
                    <p> {personal.bio || 'No bio...'} </p>
                </section>
            </section>

            <section className='border-1 border border-gray p-2 rounded-md'>
                <h3 className='font-semibold'> Work Experience </h3>
                {experience.length === 0
                    ? (
                        <section className='flex justify-center items-center h-[320px]'>
                            <section className='flex justify-center gap-3 items-center flex-col'>
                                <FcBriefcase className='text-[6rem]' />
                                <h2 className='font-semibold text-md'> No work experience to show. </h2>
                            </section>
                        </section>
                    )
                    : listOfExperience}
            </section>
            <section className='bg-background fixed left-0 bottom-0 gap-3 p-2 w-full flex'>
                <Button type='button' onClick={() => router.push('/apply/work-experience')} className='bg-white flex-1' variant='outline'> Back </Button>
                <Button type='button' className='flex-1 bg-primary' onClick={handleApplicationSubmit}> {loading ? 'Submitting...' : 'Submit'} </Button>
            </section>
        </section>
    );
};
