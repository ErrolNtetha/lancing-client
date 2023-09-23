import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useProfileStore } from '../hooks/useGlobalStore';

export default function withAuth(Component: any) {
    return function ProtectedRoute({ ...props }) {
        const router = useRouter();
        const { currentUser: isAuthenticated, loading } = useAuth();
        const user = useProfileStore((state: any) => state?.profile);
        console.log(user);

        useEffect(() => {
            if (loading) {
                console.log('loading');
            }
            if (user && isAuthenticated && !user?.isApproved) {
                router.push('/apply');
            }

            if (!user) {
                router.push('/login');
            }
        }, [user, loading, isAuthenticated, router]);

        return <Component {...props} />;
    };
};
