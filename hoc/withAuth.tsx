import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
// import { useAuth } from '../hooks/useAuth';
import { useProfileStore } from '../hooks/useGlobalStore';

export default function withAuth(Component: any) {
    return function ProtectedRoute({ ...props }) {
        const router = useRouter();
        // const authenticatedUser = useAuth();
        const authenticatedUser = useProfileStore((state: any) => state?.profile?.approved?.isApproved);
        console.log(authenticatedUser);

        useEffect(() => {
            if (!authenticatedUser) {
                router.push('/login');
            }
        }, [authenticatedUser, router]);

        return <Component {...props} />;
    };
};
