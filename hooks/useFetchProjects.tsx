import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';

export const useFetchProjects = () => {
    const [projects, setProjects] = useState<object | null>(null);

    useEffect(() => {
        async function getProjects() {
            const projectsRef = collection(db, 'projects');
            try {
                const querySnapshot = await getDocs(projectsRef);
                setProjects(querySnapshot);
            } catch (error) {
                console.log(error);
            }
        };

        getProjects();
    }, []);

    return projects;
}
