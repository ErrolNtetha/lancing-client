'use client'
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { LoginButton } from '../login/loginButton';
import { MobileMenu } from './mobileMenu';
import { UserHead } from './userHead';
import { useAuth } from '../../../hooks/useAuth';
import { signOut } from 'firebase/auth';
import { auth, db } from '../../../firebaseConfig';
import { DigitCounter } from '../../molecules/digitCounter';
import { collection, doc, getDocs, query, where } from 'firebase/firestore';
import { useProfileStore } from '../../../hooks/useGlobalStore';
import { FiAlignRight, FiBell } from 'react-icons/fi';
import { Button } from '../../../@/components/ui/button';

export const Header = () => {
    const [nav, setNav] = useState(false);
    const [proposals, setProposals] = useState([]);
    const [notifications, setNotifications] = useState<any>([]);
    const p: any = [];
    const { profile, clearProfile } = useProfileStore();
    const router = useRouter();
    const { currentUser } = useAuth();

    const handleLogIn = () => {
        router.push('/login')
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            clearProfile();
            setNav(!nav);
            router.push('/login');
        } catch(error) {
            console.log(error);
        }
    };

    useEffect(() => {
        async function getNotifications() {
            const uid = doc(db, `users/${currentUser?.uid}`);

            try {
                const notificationsRef = collection(db, 'notifications');
                const q = query(notificationsRef, where('to', '==', uid));

                const querySnapshots = await getDocs(q);
                querySnapshots.forEach(document => {
                    setNotifications((prevState: any) => ([...prevState, { ...document.data(), id: document.id }]))
                });
            } catch (error) {
                console.log('Error getting notificatioons: ', error);
            }
        }

        getNotifications();
    }, []);

    useEffect(() => {
        async function getMessages() {
            try {
                const messagesRef = collection(db, 'proposals');

                const querySnapshot = await getDocs(messagesRef);
                querySnapshot.forEach(async (doc) => {
                    p.push({ id: doc.id, proposal: doc.data()});
                })
                setProposals(p);
            } catch (error) {
                console.log(error);
            }
        }

        getMessages();
    }, []);

    return (
        <header className='flex shadow divide-solid divide-gray bg-background sticky top-0 z-10 justify-between transition-all duration-200 items-center w-full h-[8vh]'>
            <section className='md:container  px-4 w-full h-full flex z-10 justify-between items-center'>
                <Link href={currentUser ? '/feed' : '/'} className='max-w-full'>
                    <Image src='/assets/images/svg/blackLogo.svg' alt='Company logo' className='fill-current text-white' width={120} height={120} />
                </Link>
                    {!currentUser && (
                        <section className='hidden md:flex ml-auto'>
                            <ul className='p-0 md:flex items-center'>
                                <li className='ml-4 mr-4' >
                                    <Link className='block w-full' href='/feed'>Home</Link>
                                </li>
                                <li className='ml-4 mr-4'>
                                    <Link className='block w-full' href='/blog'>Blog</Link>
                                </li>
                                <li className='ml-4 mr-4'>
                                    <Link href='/contact'>Contact</Link>
                                </li>
                                <li className='ml-4 mr-4'>
                                    <Link href='/about'>About</Link>
                                </li>
                                <li className='ml-4 mr-4'>
                                    <Link href='/faq'>FAQ</Link>
                                </li>
                            </ul>
                        </section>
                )}
                {currentUser && !profile?.isClient
                    ? (
                        <section className='hidden md:flex ml-auto'>
                            <ul className='p-0 md:flex items-center'>
                                <li className='ml-4 mr-4' >
                                    <Link className='w-full flex items-center gap-2' href='/messages'> 
                                        Messages 
                                        <DigitCounter count={6} className='bg-[red] pointer-events-none' />
                                    </Link>
                                </li>
                                <li className='ml-4 mr-4'>
                                    <Link className='w-full flex items-center gap-2' href='/offers'>
                                        Offers 
                                        <DigitCounter count={1} className='bg-[red] pointer-events-none' />
                                    </Link>
                                </li>
                                <li className='ml-4 mr-4'>
                                    <Link className='w-full flex items-center gap-2' href='/notifications'>
                                        Notifications 
                                        <DigitCounter count={notifications.length} className='bg-[red] pointer-events-none' />
                                    </Link>
                                </li>
                                <li className='ml-4 mr-4'>
                                    <Link href='/mylistings'> My Lists </Link>
                                </li>
                            </ul>
                        </section>
                )
                : (
                        <section className='hidden md:flex ml-auto'>
                            <ul className='p-0 text-sm md:flex md:items-center'>
                                <li className='ml-3 mr-3' >
                                    <Link className='w-full flex items-center gap-2' href='/messages'> 
                                        Messages 
                                        <DigitCounter count={1} className='bg-[red] pointer-events-none' />
                                    </Link>
                                </li>
                                <li className='ml-4 mr-4'>
                                    <Link href='/myprojects'> My Projects </Link>
                                </li>
                                <li className='ml-4 mr-4'>
                                    <Link className='w-full flex items-center gap-2' href='/notifications'>
                                        Notifications 
                                        <DigitCounter count={notifications.length} className='bg-[red] pointer-events-none' />
                                    </Link>
                                </li>
                            </ul>
                        </section>
                )}
                <section className='flex items-center gap-2'>
                    {currentUser && (
                        <Link href='/notifications' className='relative p-2 hover:cursor-pointer md:hidden gap-2'>
                            <DigitCounter count={notifications.length} className='bg-[red] pointer-events-none top-0 right-0 md:hidden' absolute={true} />
                            <FiBell className='text-[1.8rem] block' />
                        </Link>
                    )}
                    <section className='relative p-2 hover:cursor-pointer gap-2'>
                        {profile?.isClient && <DigitCounter count={proposals.length} className='bg-[red] pointer-events-none top-0 right-0' absolute={true} />}
                        <FiAlignRight onClick={() => setNav(!nav)} className='text-[1.8rem] block md:hidden transition duration-200 ease-in-out' />
                    </section>
                </section>
                {(!profile?.isClient && profile?.hasOwnProperty('application')) && (
                    <Button
                        type='button'
                        className='text-white bg-primary font-extrabold py-2 px-10 hidden md:block'
                        asChild
                    > 
                        <Link href='/apply/getting-started'> Apply </Link>
                    </Button>
                )}
                <span className='hidden md:block ml-4'> 
                    {currentUser
                        ? <UserHead 
                            avatar={profile?.avatar} 
                            names={profile?.names} 
                            isClient={profile?.isClient}
                        /> 
                        : <LoginButton />} 
                </span>
                {nav && (
                    <section className='fixed bg-primary top-0 left-0 bottom-0 w-full'>
                        <MobileMenu
                            auth={currentUser}
                            email={profile?.email}
                            isClient={profile?.isClient}
                            avatar={profile?.avatar}
                            names={profile?.names}
                            handleMenuToggle={() => setNav(!nav)}
                            totalMessages={proposals.length}
                        />
                        <section className='flex items-center justify-center flex-col px-3 gap-3 absolute w-full left-0 bottom-4'>
                        {(!profile?.isClient && profile?.hasOwnProperty('application')) && (
                            <Button
                                type='button'
                                className='text-black bg-background font-extrabold w-full'
                                asChild
                            > 
                                <Link href='/apply/getting-started'> Apply </Link>
                            </Button>
                            )}
                            <Button
                                type='button'
                                className='text-white border-2 border-white font-extrabold w-full p-2 my-1 mx-4'
                                onClick={() => `${currentUser ? handleLogout() : handleLogIn()}`}
                            > 
                                {`${currentUser ? 'Logout' : 'Login'}`} 
                            </Button>
                        </section>
                    </section>
                )}
            </section>
        </header>
    );
};
