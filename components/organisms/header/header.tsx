'use client'
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Button } from '../../atoms/button';
import { LoginButton } from '../login/loginButton';
import { MobileMenu } from './mobileMenu';
import { UserHead } from './userHead';
import { useAuth } from '../../../hooks/useAuth';
import { signOut } from 'firebase/auth';
import { auth, db } from '../../../firebaseConfig';
import { DigitCounter } from '../../molecules/digitCounter';
import { collection, getDocs } from 'firebase/firestore';
import { useProfileStore } from '../../../hooks/useGlobalStore';
import { FiAlignRight } from 'react-icons/fi';

export const Header = () => {
    const [nav, setNav] = useState(false);
    const [proposals, setProposals] = useState([]);
    const p: any = [];
    const { addProfile, profile: { isClient }, clearProfile } = useProfileStore();
    const router = useRouter();
    const userAuth = useAuth();

    const handleLogIn = () => {
        addProfile();
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

    /* async function fetch(userId: string) {
        const userRef = doc(db, 'users', userId);
        const user = await getDoc(userRef);
        return user.data();
    } */

    useEffect(() => {
        async function getMessages() {
            try {
                const messagesRef = collection(db, 'proposals');

                const querySnapshot = await getDocs(messagesRef);
                querySnapshot.forEach(async (doc) => {
                    console.log(doc.data());
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
        <header className='flex z-10 justify-between items-center text-white w-full bg-slate h-[8vh]'>
            <section className='container mx-auto px-4 w-full h-full flex z-10 justify-between items-center'>
                <Link href='/'>
                    <Image src='/images/logo.svg' alt='company logo' className='' width={80} height={20} />
                </Link>
                <section className='hidden md:flex ml-auto'>
                    <ul className='p-0 md:flex'>
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
                <section className='relative p-2 hover:cursor-pointer gap-2'>
                    <DigitCounter count={proposals.length} className='bg-[red] pointer-events-none top-0 right-0' absolute={true} />
                    <FiAlignRight onClick={() => setNav(!nav)} className='text-[1.8rem] block md:hidden' />
                </section>
                <span className='hidden md:block ml-4'> 
                    {userAuth
                        ? <UserHead 
                            avatar={userAuth?.avatar} 
                            displayName={userAuth?.displayName} 
                            isClient={isClient}
                            /> 
                        : <LoginButton />} 
                </span>
                {nav && (
                    <section className='fixed bg-slate top-0 left-0 bottom-0 w-full'>
                        <MobileMenu
                            auth={userAuth}
                            email={userAuth?.email}
                            isClient={isClient}
                            avatar={userAuth?.avatar}
                            displayName={userAuth?.displayName}
                            handleMenuToggle={() => setNav(!nav)}
                            totalMessages={proposals.length}
                        />
                        <section className='flex items-center justify-center absolute w-full left-0 bottom-4'>
                            <Button
                                className='border-2 border-white font-extrabold w-full p-2 my-1 mx-4'
                                buttonText={`${userAuth ? 'Logout' : 'Login'}`}
                                handleClick={() => `${userAuth ? handleLogout() : handleLogIn()}`}
                            />
                        </section>
                    </section>
                )}
            </section>
        </header>
    );
};
