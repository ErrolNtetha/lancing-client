'use client'

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useAuth } from '../../hooks/useAuth';
import { useProfileStore } from '../../hooks/useGlobalStore';

type AuthProps = {
    isClient: boolean;
    children: React.ReactNode;
}

export default function VendorRoute({ isClient, children }: AuthProps) {
    const { currentUser } = useAuth();
    const router = useRouter();
    const user = useProfileStore(((state: any) => state.profile));

    useEffect(() => {
        if (!user || !currentUser || isClient) {
            router.back();
        }
    }, [user, currentUser, router, isClient]);

    return user && !isClient ? <> {children} </> : null;
}
