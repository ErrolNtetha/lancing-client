import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../firebaseConfig';

export const useAuth = () => {
    const [currentUser, setCurrentUser] = useState<null | any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user);
                setLoading(false);
            } else {
                setCurrentUser(null);
                setLoading(false);
            }
        });

        return () => {};
    }, []);

    return { currentUser, loading };
};
