import { useRouter } from 'next/navigation';
import React from 'react';

type ARProps = {
    isApproved?: boolean | null;
    isClient?: boolean | null;
    authenticated?: boolean | null;
    children: React.ReactNode;
}

export const AuthorizedRoute = (props: ARProps) => {
    const { children, isApproved, authenticated, isClient } = props;
    const router = useRouter();

    const Component = (authenticated && !isApproved && !isClient) 
        ? children 
        : router.push('login');

    return (
        <>
            {Component}
        </>
    );
};
