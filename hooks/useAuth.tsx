import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../firebaseConfig';

export const useAuth = () => {
    const [currentUser, setCurrentUser] = useState<null | boolean>(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(true);
            } else {
                setCurrentUser(false);
            }
        });
    }, []);

    return currentUser;
};
