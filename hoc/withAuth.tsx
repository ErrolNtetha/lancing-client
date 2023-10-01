import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';

export default function withAuth(Component: any) {
    return function ProtectedRoute({ ...props }) {
        const router = useRouter();
        const { currentUser, loading } = useAuth();

        useEffect(() => {
            if (loading) {
                console.log('loading');
            } else if (!currentUser) {
                router.push('/login');
            }
        }, [loading, currentUser, router]);

        return <Component {...props} />;
    };
};
