'use client'

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useAuth } from '../../../hooks/useAuth';
import { useProfileStore } from '../../../hooks/useGlobalStore';

type AuthProps = {
    isClient: boolean;
    children: React.ReactNode;
}

export default function VendorRoute({ isClient, children }: AuthProps) {
    const { currentUser } = useAuth();
    const router = useRouter();
    const user = useProfileStore(((state: any) => state.profile));
    console.log('Current user: ', currentUser);

    useEffect(() => {
        if (!user || isClient) {
            router.push('/');
        }
    }, [user, router, isClient]);

    return user && !isClient ? <> {children} </> : null;
};
